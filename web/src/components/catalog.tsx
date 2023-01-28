import { useState } from 'react'
import { Input } from '@/components/Input'
import RadioGroupCategories from '@/components/RadioGroupCategories'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useProducts } from '@/services/hooks/useProducts'
import { Plus } from 'phosphor-react'
import {
  CatalogContainer,
  CategoriesContainer,
  ProductsContainer,
  CardsContainer,
  Card,
  NavigationWrapper
} from '@/styles/components/catalog'
import Link from 'next/link'

type ArrowProps = {
  isDisabled?: boolean,
  onClick: (event: any) => void,
  left?: boolean
}

type Product = {
  id: number,
  name: string,
  urlPhoto: string,
}

type CatalogProps = {
  onSelectProduct: (product: Product) => void
}

export default function Catalog({ onSelectProduct }: CatalogProps) {

  const [page, setPage] = useState(1)
  const { data, isLoading, error } = useProducts(page)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  function handleSelectProduct(product: Product) {
    onSelectProduct(product)
  }

  return (
    <CatalogContainer>
      <CategoriesContainer>
        <RadioGroupCategories />
      </CategoriesContainer>
      <ProductsContainer>
        <Input placeholder='pesquisar pelo nome' />
        <NavigationWrapper>
          {isLoading ? <p>carregando</p> : error ? <p>Falha ao obter dados dos produtos</p> : (
            <CardsContainer ref={sliderRef} className="keen-slider">
              {
                data?.products.map((product) => {
                  return (
                    <Card key={product.id} className="keen-slider__slide">
                      <Image src={product.image[0].url} alt="" height={100} width={100} />
                      <div className='cardBody'>
                        <h4>
                          {product.name}
                        </h4>
                        <span>A partir de R$ {product.price.toFixed(2)}</span>
                      </div>
                      <footer>
                        <Link href="/">Detalhes</Link>
                        <button onClick={() => handleSelectProduct({
                          id: product.id,
                          name: product.name,
                          urlPhoto: product.image[0].url
                        })}>
                          <Plus size={20} weight="light" color='white' />
                        </button>
                      </footer>
                    </Card>
                  )
                })
              }

              {loaded && instanceRef.current && (
                <>
                  <Arrow
                    left
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                    isDisabled={currentSlide === 0}
                  />

                  <Arrow
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                    isDisabled={
                      currentSlide ===
                      instanceRef.current.track.details.slides.length - 1
                    }
                  />
                </>
              )}
            </CardsContainer>)}
        </NavigationWrapper>
      </ProductsContainer>
    </CatalogContainer>
  )
}

function Arrow({ isDisabled = false, onClick, left = false }: ArrowProps) {
  const disable = isDisabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={onClick}
      className={`arrow ${left ? "arrow--left" : "arrow--right"
        } ${disable}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

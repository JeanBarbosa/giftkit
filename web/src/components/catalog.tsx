import { useState } from 'react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import RadioGroupCategories from '@/components/RadioGroupCategories'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import productDefaultImg from "../assets/productDefault.jpg"
import {
  CatalogContainer,
  CategoriesContainer,
  ProductsContainer,
  CardsContainer,
  Card,
  NavigationWrapper
} from '@/styles/pages/catalog'

import 'keen-slider/keen-slider.min.css'
import { withSSRAuth } from '@/utils/withSSRAuth'


interface ArrowProps {
  isDisabled?: boolean,
  onClick: (event: any) => void,
  left?: boolean
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

export default function Catalog() {

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

  return (
    <CatalogContainer>
      <CategoriesContainer>
        <RadioGroupCategories />
      </CategoriesContainer>
      <ProductsContainer>
        <Input placeholder='pesquisar pelo nome' />
        <NavigationWrapper>
          <CardsContainer ref={sliderRef} className="keen-slider">
            <Card className="keen-slider__slide">
              <Image src={productDefaultImg} alt="Avatar" height={100} width={100} />
              <div>
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
                <Button title='add' />
              </div>
            </Card>

            <Card className="keen-slider__slide">
              <Image src={productDefaultImg} alt="Avatar" height={100} width={100} />
              <div>
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
                <Button title='add' />
              </div>
            </Card>

            <Card className="keen-slider__slide">
              <Image src={productDefaultImg} alt="Avatar" height={100} width={100} />
              <div>
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
                <Button title='add' />
              </div>
            </Card>


            <Card className="keen-slider__slide">
              <Image src={productDefaultImg} alt="Avatar" height={100} width={100} />
              <div>
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
                <Button title='add' />
              </div>
            </Card>

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
          </CardsContainer>
        </NavigationWrapper>
      </ProductsContainer>
    </CatalogContainer>
  )
}
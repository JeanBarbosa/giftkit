import * as Popover from '@radix-ui/react-popover'
import Catalog from './catalog'
import { useEffect, useState } from 'react'
import { Trash, X } from 'phosphor-react'
import {
  ContextButtonTrigger,
  PopoverArrow,
  PopoverClose,
  PopoverContainer,
  PopoverListProducts,
  ProductSelected,
  StyledContent
} from '@/styles/components/searchPopover'
import Image from 'next/image'

type Product = {
  id: number,
  name: string,
  urlPhoto: string,
}

type PopoverProps = {
  onChangeList: (products: Product[]) => void,
}

const SearchPopover = ({ onChangeList }: PopoverProps) => {

  const [data, setData] = useState<Product[]>([])

  function addProduct(product: Product) {
    //TODO fecha o popover

    if (data.length > 2) {
      return alert("Card cheio")
    }

    setData(data => [...data, product])
  }

  function removeProduct(index: number) {
    const products = data.filter((product, position) =>
      position !== index
    )

    setData(products)
  }

  function handleSelectProduct(data: any) {
    console.log(data)
  }

  useEffect(() => {
    //onChangeList(data)
  }, [data])

  return (
    <PopoverContainer>
      <PopoverListProducts>
        {data.length === 0 && "Nenhum presente ☹️"}
        {data.map((product, index) => {
          return (
            <ProductSelected key={`${product.id}${index}`}>
              <Image src={product.urlPhoto} alt="" height={80} width={80} />
              <span>{product.name}</span>
              <button onClick={() => removeProduct(index)}>
                <Trash size={16} weight="light" color='red' />
              </button>
            </ProductSelected>
          )
        })}
      </PopoverListProducts>
      <Popover.Root>
        <Popover.Trigger asChild>
          <ContextButtonTrigger disabled={data.length > 2 ? true : false}>
            adicionar
          </ContextButtonTrigger>
        </Popover.Trigger>
        <Popover.Portal>
          <StyledContent>
            <Catalog onSelectProduct={addProduct} />
            <PopoverClose aria-label="Close">
              <X size={32} weight="light" />
            </PopoverClose>
            <PopoverArrow />
          </StyledContent>
        </Popover.Portal>
      </Popover.Root>
    </PopoverContainer>
  )
}

export default SearchPopover
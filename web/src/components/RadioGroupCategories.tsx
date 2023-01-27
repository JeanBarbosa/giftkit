import { useState } from 'react'
import { useCategories } from '../services/hooks/useProducts'
import {
  Label,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupListContent,
  RadioGroupRoot,
  RadioGroupWrapper
} from '@/styles/components/radioGroupCategories'

function RadioGroupCategories() {

  const [page, setPage] = useState(1)
  const { data, isLoading, error } = useCategories(page)

  return (
    <RadioGroupWrapper>
      <RadioGroupRoot defaultValue="default" aria-label="View density">
        {
          isLoading ? <p>carregando</p> : error ? <p>Falha ao obter dados da categoria</p> :
            data?.categories.map((category, index) => {
              return (
                <RadioGroupListContent key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <RadioGroupItem value={category.recordId} id={`r${index}`}>
                    <RadioGroupIndicator />
                  </RadioGroupItem>
                  <Label htmlFor={`r${index}`}>
                    {category.publicId}
                  </Label>
                </RadioGroupListContent>
              )
            })
        }
      </RadioGroupRoot>
    </RadioGroupWrapper>
  )
}

export default RadioGroupCategories
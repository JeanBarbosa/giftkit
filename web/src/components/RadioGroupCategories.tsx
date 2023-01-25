import { useState } from 'react'
import { styled } from '@/styles'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { useCategories } from '../services/hooks/useProducts'
import { queryClient } from '../services/queryClient'
import { api } from '../services/api'


const RadioGroupRoot = styled(RadioGroup.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

const RadioGroupItem = styled(RadioGroup.Item, {
  backgroundColor: 'white',
  width: '25px',
  height: '25px',
  borderRadius: '100%',
  boxShadow: '0 2px 10px $gray',

  '&:hover': {
    backgroundColor: 'blue'
  },

  '&:focus': {
    boxShadow: '0 0 0 2px black'
  }
})

const RadioGroupIndicator = styled(RadioGroup.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',

  '&:after': {
    content: '',
    display: 'block',
    width: '11px',
    height: '11px',
    borderRadius: '50%',
    backgroundColor: 'blue',
  }
})

const Form = styled('form', {

})

const Label = styled('label', {
  color: 'white',
  fontSize: '15px',
  lineHeight: '1',
  paddingLeft: '15px',
})

function RadioGroupCategories() {

  const [page, setPage] = useState(1)
  const { data, isLoading, error } = useCategories(page)


  return (
    <Form>
      <RadioGroupRoot defaultValue="default" aria-label="View density">
        {
          isLoading ? <p>carregando</p> : error ? <p>Falha ao obter dados da categoria</p> :
            data?.categories.map((category, index) => {
              return (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <RadioGroupItem value="default" id={`r${index}`}>
                    <RadioGroupIndicator />
                  </RadioGroupItem>
                  <Label htmlFor={`r${index}`}>
                    {category.publicId}
                  </Label>
                </div>
              )
            })
        }
      </RadioGroupRoot>
    </Form>
  )
}

export default RadioGroupCategories
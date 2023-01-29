import { useFormData } from '@/contexts/FormContext'
import { Button } from '../Button'
import SearchPopover from '../SearchPopover'
import { FormWrapper, CardBoxWrapper } from '@/styles/components/formSteps'
import { useState } from 'react'

type CardFormProps = {
  formStep: number,
  nextFormStep: () => void,
}

type Product = {
  id: number,
  name: string,
  urlPhoto: string,
}

type Deck = {
  cardOne: Product[],
  cardTwo: Product[],
  cardThree: Product[],
}

export default function CardForm({ formStep, nextFormStep }: CardFormProps) {
  const [isDisabled, setIsDisabled] = useState(true)
  const { setFormValues } = useFormData()
  const [deck, setDeck] = useState<Deck>({
    cardOne: [],
    cardTwo: [],
    cardThree: []
  } as Deck)

  function validateDeck() {
    //verifica se os cards tenha pelo menos um produto inserido
    if (deck.cardOne.length > 0 && deck.cardTwo.length > 0 && deck.cardThree.length > 0) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }

  function addCards(products: Product[], deckKey: number) {
    if (deckKey === 1) {
      setDeck((deck) => {
        deck.cardOne = products
        return deck
      })
    }

    if (deckKey === 2) {
      setDeck((deck) => {
        deck.cardTwo = products
        return deck
      })
    }

    if (deckKey === 3) {
      setDeck((deck) => {
        deck.cardThree = products
        return deck
      })
    }

    validateDeck()
  }

  async function handleSubmit() {
    try {
      setFormValues({ deck })
      nextFormStep()
    } catch (err) {
      console.log('Error ao salvar o presente')
    }
  }

  return (
    <FormWrapper className={formStep === 1 ? 'showForm' : 'hideForm'}>
      <h2>Adicione os produtos nos cards</h2>
      <CardBoxWrapper>
        <SearchPopover onChangeList={(data) => addCards(data, 1)} />
        <SearchPopover onChangeList={(data) => addCards(data, 2)} />
        <SearchPopover onChangeList={(data) => addCards(data, 3)} />
      </CardBoxWrapper>

      <form onSubmit={(e) => e.preventDefault()}>
        <Button disabled={isDisabled} title='Próximo' onClick={handleSubmit} />
      </form>

    </FormWrapper>
  )
}

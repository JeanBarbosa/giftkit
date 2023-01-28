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
  const { setFormValues } = useFormData()
  const [deck, setDeck] = useState<Deck>({
    cardOne: [],
    cardTwo: [],
    cardThree: []
  } as Deck)

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
  }

  async function handleSubmit() {
    try {

      setFormValues({
        deck
      })
      nextFormStep()
    } catch (err) {

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

      <Button title='Próximo' onClick={handleSubmit} />

    </FormWrapper>
  )
}

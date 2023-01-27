import { useFormData } from '@/contexts/FormContext'
import { Button } from '../Button'
import SearchPopover from '../SearchPopover'
import { FormWrapper, CardBoxWrapper, FormCardBoxWrapper } from '@/styles/components/formSteps'

type CardFormProps = {
  formStep: number,
  nextFormStep: () => void,
}


export default function CardForm({ formStep, nextFormStep }: CardFormProps) {
  const { setFormValues } = useFormData()

  async function handleSubmit() {
    try {
      const data = {}

      setFormValues(data)
      nextFormStep()
    } catch (err) {

    }
  }

  return (
    <FormCardBoxWrapper className={formStep === 1 ? 'showForm' : 'hideForm'}>
      <h2>Adicione os produtos nos cards</h2>
      <CardBoxWrapper>
        <SearchPopover />
        <SearchPopover />
        <SearchPopover />
      </CardBoxWrapper>

      <Button title='Próximo' onClick={handleSubmit} />
    </FormCardBoxWrapper>
  )
}

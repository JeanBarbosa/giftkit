import { useFormData } from '@/contexts/FormContext'
import { Button } from '../Button'

type CardFormProps = {
  formStep: number,
  nextFormStep: () => void,
}


export default function CardForm({ formStep, nextFormStep }: CardFormProps) {
  const { setFormValues } = useFormData()

  async function handleSubmit(data: any, e: any) {
    try {
      e.preventDefault()

      setFormValues(data)
      nextFormStep()
    } catch (err) {

    }
  }

  return (
    <div className={formStep === 1 ? 'showForm' : 'hideForm'}>
      <h2>Adicione os produtos nos cards</h2>

      <form onSubmit={(e) => handleSubmit(e.target, e)}>
        <div>
          <input name="address" type="address" />
        </div>
        <Button title='Próximo' type="submit" />
      </form>
    </div>
  )
}

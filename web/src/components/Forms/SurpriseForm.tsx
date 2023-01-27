import { useFormData } from '@/contexts/FormContext'
import { Button } from '../Button'
import { Input } from '../Input'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { FormWrapper } from '@/styles/components/formSteps'

type SurpriseFormProps = {
  formStep: number,
  nextFormStep: () => void,
}

interface IFormInputs {
  email: string
  title: string
  description: string
}

const schema = yup.object({
  email: yup.string().email('E-mail não é válido').required('E-mail é obrigatório'),
  title: yup.string().required('Título é obrigatório'),
  description: yup.string().required('descrição é obrigatória'),
}).required()

export function SurpriseForm({ formStep, nextFormStep }: SurpriseFormProps) {

  const { setFormValues } = useFormData()
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  async function handleNextForm({ ...data }: IFormInputs) {
    try {
      setFormValues(data)
      nextFormStep()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <FormWrapper className={formStep === 0 ? 'showForm' : 'hideForm'}>
        <h2> Informações da Surpresa</h2>
        <form onSubmit={handleSubmit(handleNextForm)}>
          <Input placeholder='E-mail' {...register("email")} />
          <span>{errors.email?.message}</span>

          <Input placeholder='title' {...register("title")} />
          <span>{errors.title?.message}</span>

          <Input placeholder='descrição' {...register("description")} />
          <span>{errors.description?.message}</span>

          <Button title="Próximo" type='submit' />
        </form>
      </FormWrapper>
    </>
  )
}
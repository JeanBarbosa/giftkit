import { useFormData } from '@/contexts/FormContext'

export default function FormCompleted() {
  const { data } = useFormData()

  return (
    <>
      <h2>Envar e previsuar 🎉</h2>
    </>
  )
}

import { useFormData } from '@/contexts/FormContext'

export default function FormCompleted() {
  const { data } = useFormData()
  console.log(data)
  return (
    <>
      <h2>Envar e previsuar 🎉</h2>
    </>
  )
}

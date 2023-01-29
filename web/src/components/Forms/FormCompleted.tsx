import { useFormData } from '@/contexts/FormContext'
import { api } from '@/services/apiClient'
import { CompletedContainer } from '@/styles/components/formSteps'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../Button'

export default function FormCompleted() {
  const { data } = useFormData()
  const [success, setSuccess] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  async function handleSubmit() {
    try {
      setIsDisabled(true)
      await api.post('/surprisegift', data)
      setSuccess(true)

    } catch (err) {
      setIsDisabled(false)
      alert('Error ao salvar o presente')
    }
  }

  return (
    <CompletedContainer>
      {success ? (
        <>
          <h2>
            🎉🎉 Opções de presentes enviado com sucesso 🎉🎉
          </h2>
          <p>
            O presente surpresa foi enviado para o email: <b>{data?.email}</b>
          </p>
          <Link href="/dashboard">
            Voltar para Dashboard
          </Link>
        </>) : (
        <>
          <h2>
            Esta quase la... 😊
          </h2>
          <p>
            enviar para o email: <b>{data?.email}</b>
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <Button disabled={isDisabled} onClick={handleSubmit} title='Salvar e enviar' />
          </form>
        </>
      )}
    </CompletedContainer>
  )
}

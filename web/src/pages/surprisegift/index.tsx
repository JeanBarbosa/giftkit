import FormSurprise from '@/components/FormSurprise'
import CardForm from '@/components/Forms/CardForm'
import FormCompleted from '@/components/Forms/FormCompleted'
import { SurpriseForm } from '@/components/Forms/SurpriseForm'
import { SurpriseGiftContainer } from '@/styles/pages/suprisegift'
import { withSSRAuth } from '@/utils/withSSRAuth'
import Head from 'next/head'
import { useState } from 'react'

export default function SurpriseGift() {

  const [formStep, setFormStep] = useState(0)

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1)

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1)

  return (
    <>
      <Head>
        <title>New Surprise</title>
      </Head>
      <SurpriseGiftContainer>

        <h2>
          Não envie brindes,
          crie experiências! 🚀
        </h2>

        <FormSurprise currentStep={formStep} prevFormStep={prevFormStep}>
          {formStep >= 0 && (
            <SurpriseForm formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep >= 1 && (
            <CardForm formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep > 1 && <FormCompleted />}
        </FormSurprise>
      </SurpriseGiftContainer>
    </>
  )
}

// Verifica se  o usuário está autenticado
export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  }
})
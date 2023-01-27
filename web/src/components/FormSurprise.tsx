import { StepsContainer, StepNavigator } from '@/styles/components/formSteps'
import { CaretLeft } from 'phosphor-react'
import { ReactNode } from 'react'

type FormSurpriseProps = {
  children: ReactNode,
  currentStep: number,
  prevFormStep: () => void
}

export default function FormSurprise(
  { children, currentStep, prevFormStep }: FormSurpriseProps
) {

  return (
    <StepsContainer>
      {currentStep < 3 && (
        <StepNavigator>
          <span>Passo {currentStep + 1} de 3</span>
          {currentStep > 0 && (
            <button
              onClick={prevFormStep}
              type="button"
              className='btnBack'
            >
              <CaretLeft size={20} weight="light" />
              Voltar
            </button>
          )}
        </StepNavigator>
      )}
      {children}
    </StepsContainer>
  )
}

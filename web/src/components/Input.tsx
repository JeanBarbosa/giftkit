import { InputWrapper } from '@/styles/components/input'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string
}

export function Input({ variant, ...rest }: InputProps) {
  return (
    <InputWrapper {...rest} />
  )
}
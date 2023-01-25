import { ButtonWrapper } from '@/styles/components/button'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonWrapper
      {...rest}
    >
      {title}
    </ButtonWrapper>
  )
}
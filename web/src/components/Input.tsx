import React from 'react'
import { styled } from '@stitches/react'

const InputPrimitive = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithRef<"input">
>((props, ref) => <input {...props} ref={ref} />)

const InputWrapper = styled(InputPrimitive, {
  background: 'none',
  border: '1px solid $gray300',
  borderRadius: '8px',
  padding: '13px 18px',
  fontSize: '14px',
  marginTop: '18px',

})

export const Input = InputWrapper


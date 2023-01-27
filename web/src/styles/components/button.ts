import { styled } from '..'

export const ButtonWrapper = styled('button', {
  backgroundColor: '$orange700',
  border: 0,
  color: '$white',
  borderRadius: 8,
  padding: '1.25rem',
  fontWeight: 'bold',
  fontSize: '$md',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    filter: 'brightness(90%)',
  }
})

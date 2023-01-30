import { styled } from '..'
import * as Popover from '@radix-ui/react-popover'

export const PopoverContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray100',
  borderRadius: '0.5rem',
  padding: '0.8rem'
})

export const StyledContent = styled(Popover.Content, {
  backgroundColor: "$orange700",
  borderRadius: '0.5rem',
  minWidth: '50rem',
})

export const ContextButtonTrigger = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '0.5rem',
  padding: '0.5rem',
  backgroundColor: '$green500',
  border: 0,
  color: '$white',
  borderRadius: 8,
  fontSize: '$sm',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  }
})

export const PopoverArrow = styled(Popover.Arrow, {
  height: '1rem',
  width: '1.5rem',
  fill: '$blueDark',
})

export const PopoverListProducts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px white dashed',
  color: 'black',
  borderRadius: '0.25rem',
  borderColor: 'black',
  userSelect: 'none',
  padding: '2.8125rem 0',
  width: '8rem',
  height: '12rem',
  textAlign: 'center',
})

export const ProductSelected = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray300',
  borderRadius: '0.25rem',
  maxWidth: '7rem',
  maxHeight: '4rem',
  marginBottom: '0.5rem',

  img: {
    objectFit: 'fit',
    maxWidth: '80px',
    height: '40px',
  },

  span: {
    fontSize: '$sm',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  button: {
    background: 'transparent',
    border: 'none'
  }
})

export const PopoverClose = styled(Popover.Close, {
  fontFamily: 'inherit',
  border: 'none',
  borderRadius: '100%',
  height: '25px',
  width: '25px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$red',
  position: 'absolute',
  top: '5px',
  right: '5px',

  '.PopoverClose:hover': {
    backgroundColor: '$red'
  },

  '.PopoverClose:focus': {
    boxShadow: '0 0 0 2px $red'
  }
})
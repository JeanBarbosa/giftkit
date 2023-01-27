import * as RadioGroup from '@radix-ui/react-radio-group'
import { styled } from '..'

export const RadioGroupWrapper = styled('div', {
  height: '280px',
  width: '200px',
  overflowY: 'auto',
  overflowX: 'hidden',
  float: 'left',
  position: 'relative',
  marginLeft: '-5px'
})

export const RadioGroupListContent = styled('div', {
  width: '215px',
  float: 'left',
  padding: '0 0 0 5px',
  position: 'relative',
  borderRight: '1px #f8f7f3 solid'
  /* background-image:url(images/bubble.png); */
  /* background-color: black; */
})

export const RadioGroupRoot = styled(RadioGroup.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',

})

export const RadioGroupItem = styled(RadioGroup.Item, {
  backgroundColor: 'white',
  width: '25px',
  height: '25px',
  borderRadius: '100%',
  boxShadow: '0 2px 10px $gray',

  '&:hover': {
    backgroundColor: 'blue'
  },

  '&:focus': {
    boxShadow: '0 0 0 2px black'
  }
})

export const RadioGroupIndicator = styled(RadioGroup.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',

  '&:after': {
    content: '',
    display: 'block',
    width: '11px',
    height: '11px',
    borderRadius: '50%',
    backgroundColor: 'blue',
  }
})

export const Form = styled('form', {

})

export const Label = styled('label', {
  color: 'white',
  fontSize: '15px',
  lineHeight: '1',
  paddingLeft: '15px',
})


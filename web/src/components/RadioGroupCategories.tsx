import { styled } from '@/styles'
import * as RadioGroup from '@radix-ui/react-radio-group'

const RadioGroupRoot = styled(RadioGroup.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

const RadioGroupItem = styled(RadioGroup.Item, {
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

const RadioGroupIndicator = styled(RadioGroup.Indicator, {
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

const Form = styled('form', {

})

const Label = styled('label', {
  color: 'white',
  fontSize: '15px',
  lineHeight: '1',
  paddingLeft: '15px',
})

const RadioGroupCategories = () => (
  <Form>
    <RadioGroupRoot defaultValue="default" aria-label="View density">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroupItem value="default" id="r1">
          <RadioGroupIndicator />
        </RadioGroupItem>
        <Label htmlFor="r1">
          Cadernos
        </Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroupItem value="comfortable" id="r2">
          <RadioGroupIndicator />
        </RadioGroupItem>
        <Label htmlFor="r2">
          Copos
        </Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroupItem value="compact" id="r3">
          <RadioGroupIndicator />
        </RadioGroupItem>
        <Label htmlFor="r3">
          Bolsas
        </Label>
      </div>
    </RadioGroupRoot>
  </Form>
)

export default RadioGroupCategories
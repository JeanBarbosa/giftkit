import { styled } from '@/styles'
import * as Popover from '@radix-ui/react-popover'
import Catalog from './catalog'

const StyledContent = styled(Popover.Content, {
  backgroundColor: "$orange700",
  borderRadius: '0.5rem',
  minWidth: '50rem',
})

const ContextButtonTrigger = styled('div', {
  display: 'block',
  border: '2px white dashed',
  color: 'black',
  borderRadius: '0.25rem',
  borderColor: 'black',
  userSelect: 'none',
  padding: '2.8125rem 0',
  width: '8rem',
  height: '8rem',
  textAlign: 'center',
})

const PopoverArrow = styled(Popover.Arrow, {
  height: '1rem',
  width: '1.5rem',
  fill: '#f8f8f8',
})

const SearchPopover = () => {

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <ContextButtonTrigger>
          click para adicionar
        </ContextButtonTrigger>
      </Popover.Trigger>
      <Popover.Portal>
        <StyledContent >
          <Catalog />
          <PopoverArrow />
        </StyledContent>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default SearchPopover
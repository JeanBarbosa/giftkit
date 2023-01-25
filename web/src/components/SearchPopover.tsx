import Catalog from '@/pages/catalog'
import { styled } from '@/styles'
import * as Popover from '@radix-ui/react-popover'

const StyledContent = styled(Popover.Content, {
  minWidth: 130,
  borderRadius: '0.5rem',
})

const ContextButtonTrigger = styled('div', {
  display: 'block',
  border: '2px white dashed',
  color: 'black',
  borderRadius: '4px',
  borderColor: 'black',
  fontSize: '15px',
  userSelect: 'none',
  padding: '45px 0',
  width: '300px',
  textAlign: 'center',
})

const SearchPopover = () => {

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <ContextButtonTrigger>
          itens
        </ContextButtonTrigger>
      </Popover.Trigger>
      <Popover.Portal>
        <StyledContent >
          <Catalog />
          <Popover.Arrow height={8} width={16} />
        </StyledContent>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default SearchPopover
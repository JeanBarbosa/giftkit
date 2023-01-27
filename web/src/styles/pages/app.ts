import { styled } from ".."

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  //minHeight: '100vh',
  minHeight: '50rem'
})

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 0',
  width: '100%',
  maxWidth: 1080,
  margin: '0 auto',

  span: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  }
})
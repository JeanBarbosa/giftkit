import { styled } from '..'

export const CatalogContainer = styled('main', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  margin: '0 auto',
})

export const CategoriesContainer = styled('aside', {
  display: 'flex',
  padding: '1rem',
  borderTopLeftRadius: '0.5rem',
  borderBottomLeftRadius: '0.5rem',
})

export const ProductsContainer = styled('div', {
  flex: 1,
  padding: '1rem',
  backgroundColor: '#f8f8f8',
  borderTopRightRadius: '0.5rem',
  borderBottomRightRadius: '0.5rem',
})

export const NavigationWrapper = styled('div', {
  position: 'relative',

  '.arrow': {
    width: '30px',
    height: '30px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    '-webkit-transform': 'translateY(-50%)',
    fill: '$orange700',
    cursor: 'pointer',
  },

  '.arrow--left': {
    left: '5px'
  },

  '.arrow--right': {
    left: 'auto',
    right: '5px'
  },

  '.arrow--disabled': {
    fill: 'rgba(255, 255, 255, 0.5)'
  }

})

export const CardsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
  gridGap: '2rem',
  marginTop: '1rem',
})

export const Card = styled('div', {
  display: 'grid',
  gridTemplateRows: 'max-content 200px 1fr',
  height: '200px',
  maxWidth: '130px',
  backgroundColor: '$white',
  borderRadius: '0.4rem',

  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  },

})
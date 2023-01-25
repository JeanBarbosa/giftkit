import { styled } from '..'

export const CatalogContainer = styled('main', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  margin: '0 auto',
})

export const CategoriesContainer = styled('aside', {
  display: 'flex',
  borderTopLeftRadius: '0.5rem',
  borderBottomLeftRadius: '0.5rem',
  padding: '1rem',
  backgroundColor: '$blueDark'
})

export const ProductsContainer = styled('div', {
  padding: '1rem',
  backgroundColor: '$orange700',
  borderTopRightRadius: '0.5rem',
  borderBottomRightRadius: '0.5rem',
})
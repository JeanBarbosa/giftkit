import { styled } from '..'

export const DashboardContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: 1180,
  margin: '0 auto'
})

export const ListSurpriseGiftContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  justifyContent: 'flex-start',
  padding: '0.25rem',
  width: '100%',
  maxWidth: 576,
  height: 400,

})

export const SurpriseItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '2rem',
  padding: '2rem',
  backgroundColor: '#f8f8f8',
  borderRadius: '0.5rem',
  height: '2.5rem',
  width: '400px',

  h4: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  '.open': {
    color: '$green300'
  },

  '.close': {
    color: '$blueDark'
  }

})


export const NewSurpriseGift = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: '1rem',
  },
})
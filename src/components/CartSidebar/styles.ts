import { styled } from '../../styles'

export const CartSidebarContainer = styled('aside', {
  right: 0,
  top: 0,
  bottom: 0,
  background: '$gray800',
  width: '33rem',
  boxShadow: '-5px 0 50px #000000',
  transition: 'all 0.2s ease-in-out',
  transform: 'translateX(110%)',
  position: 'absolute',
  '&.open': {
    transform: 'translateX(0%)',
  },
})

export const CartSidebarContent = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '3rem 3rem 1rem',
  overflow: 'auto',

  h2: {
    fontSize: '$md',
    color: '$gray100',
    margin: '2rem 0',
  },
})
export const CloseButton = styled('button', {
  position: 'absolute',
  right: '1rem',
  top: '1rem',
  width: '50px',
  height: '50px',
  border: 'none',
  background: 'transparent',
  color: '$gray100',
  '&:hover': {
    color: '$white',
  },
})
export const CartSummary = styled('div', {
  marginTop: 'auto',
  paddingTop: '2rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.75rem',
  },
})

export const BuyNowButton = styled('button', {
  width: '100%',
  border: 'none',
  background: '$green500',
  padding: '1.25rem',
  color: '$white',
  fontWeight: 'bold',
  fontSize: '$md',
  borderRadius: '8px',
  margin: '2rem 0',
  transition: 'background 0.2s',
  '&:hover': {
    background: '$green300',
  },
})

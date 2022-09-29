import { styled } from '..'

export const HomeContainer = styled('main', {
  height: '41rem',
  margin: '2rem 0 0 auto',
  width: '100%',
  maxWidth: 'calc(74rem + (100vw - 74rem)/2)',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
})

export const ProductsContainer = styled('div', {
  position: 'relative',
  background: `linear-gradient(180deg, #1EA483 0%, #7465D4 100%)`,
  borderRadius: 8,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',

  overflow: 'hidden',
  a: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  img: {
    objectFit: 'cover',
  },
  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: '90%',
    },
  },
})

export const ProductFooter = styled('footer', {
  background: '$gray800',
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  borderRadius: 6,
  padding: '1.25rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    span: {
      fontSize: '$mg',
      color: '$gray100',

      fontWeight: 'bold',
    },
    strong: {
      fontSize: '$xl',
      color: '$green300',

      fontWeight: 'bold',
    },
  },
  button: {
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: 8,
    background: '$green500',
    transition: 'background 0.2s',
    border: 'none',
    '&:hover': {
      background: '$green300',
    },
  },
})

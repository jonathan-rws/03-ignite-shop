import { styled } from '..'

export const ProductContainer = styled('main', {
  paddingTop: '2rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: '74rem',
  margin: '0 auto',
})
export const ProductImgContainer = styled('div', {
  width: '100%',
  maxWidth: '576px',
  height: '41rem',
  borderRadius: '8px',
  background: `linear-gradient(180deg, #1EA483 0%, #7465D4 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  img: {
    objectFit: 'cover',
  },
})
export const ProductDetails = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '2rem',

  h1: {
    fontSize: '2rem',
    color: '$gray300',
  },
  span: {
    fontSize: '2rem',
    color: '$green500',
    display: 'block',
    marginTop: '1rem',
  },
  p: {
    display: 'block',
    marginTop: '2rem',
    lineHeight: '1.9rem',
  },
})
export const ProductButton = styled('button', {
  marginTop: 'auto',
  padding: '1.25rem',
  background: '$green500',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: '8px',
  color: '$white',
  fontSize: '$md',
  fontWeight: 'bold',
  transition: 'background-color 0.2s',
  '&:hover': {
    background: '$green300',
  },
  '&:disabled': {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
})

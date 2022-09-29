import { styled } from '..'

export const SuccessContainer = styled('div', {
  width: '100vw',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  h1: {
    fontSize: '$2xl',
    color: '$white',
    marginTop: '3rem',
  },
  span: {
    marginTop: '2rem',
    fontSize: '$xl',
    maxWidth: '590px',
  },
  a: {
    textDecoration: 'none',
    marginTop: '2rem',
  },
})
export const ProductsLisContainer = styled('div', {
  margin: '5rem auto 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ImageContainer = styled('div', {
  boxShadow: '-4px 0 15px #000000',
  width: '8.75rem',
  height: '8.75rem',
  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',
  background: `linear-gradient(180deg, #1EA483 0%, #7465D4 100%)`,
  borderRadius: '50%',
  padding: '4rem',
  '& + div': {
    marginLeft: '-3rem',
  },
})

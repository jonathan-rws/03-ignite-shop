import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  padding: '12rem, 0',
  maxWidth: '74rem',
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  '>img': {
    cursor: 'pointer',
  },
})
export const OpenCartButton = styled('button', {
  position: 'relative',
  border: 'none',
  background: '$gray800',
  color: '$gray400',
  width: '4rem',
  height: '4rem',
  borderRadius: '8px',
})

export const CartCount = styled('div', {
  width: '2rem',
  height: '2rem',
  fontSize: '1rem',
  color: '$white',
  fontWeight: 'bold',
  position: 'absolute',
  borderRadius: '50%',
  right: '-1rem',
  top: '-1rem',
  background: '$green300',
  outline: 'solid 3px $gray900',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

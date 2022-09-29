import { styled } from '@stitches/react'

export const ProductInCartContainer = styled('div', {
  marginTop: '1.5rem',
  display: 'flex',
  gap: '1.75rem',
})

export const ProductInCartImageContainer = styled('div', {
  position: 'relative',
  width: '6rem',
  height: '6rem',
  background: `linear-gradient(180deg, #1EA483 0%, #7465D4 100%)`,
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ProductInCartDatails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  fontSize: '$md',

  span: {
    color: '$gray300',
  },
  button: {
    background: 'transparent',
    border: 'none',
    display: 'flex',
    width: '100px',
    color: '$green500',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
})

export const CartCount = styled('div', {
  width: '2rem',
  height: '2rem',
  fontSize: '1rem',
  color: '$white',
  fontWeight: 'bold',
  position: 'absolute',
  borderRadius: '50%',
  right: '-0.875rem',
  top: '-0.875rem',
  background: '$green300',
  outline: 'solid 3px $gray800',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

import Image from 'next/future/image'
import { CartCount, HeaderContainer, OpenCartButton } from './styles'
import logoImg from '../../assets/logo.svg'
import { Handbag } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'
import Link from 'next/link'

export function Header() {
  const { cartCount, handleCartClick } = useShoppingCart()

  return (
    <HeaderContainer>
      <Link href={'/'}>
        <a>
          <Image src={logoImg} alt="" />
        </a>
      </Link>

      <OpenCartButton onClick={handleCartClick}>
        <CartCount>
          <span>{cartCount}</span>
        </CartCount>
        <Handbag size={24} />
      </OpenCartButton>
    </HeaderContainer>
  )
}

import Image from 'next/future/image'
import { useShoppingCart } from 'use-shopping-cart'
import {
  CartCount,
  ProductInCartContainer,
  ProductInCartDatails,
  ProductInCartImageContainer,
} from './styles'

interface ProductInCartProps {
  id: string
  name: string
  formattedValue: string
  image: string
  quantity: number
}

export function ProductInCart({
  id,
  name,
  formattedValue,
  image,
  quantity,
}: ProductInCartProps) {
  const { removeItem } = useShoppingCart()

  function handleRemoveItem() {
    removeItem(id)
  }

  return (
    <ProductInCartContainer>
      <ProductInCartImageContainer>
        <Image src={image} alt="" width={75} height={85} />
        <CartCount>
          <span>{quantity}</span>
        </CartCount>
      </ProductInCartImageContainer>
      <ProductInCartDatails>
        <span>{name}</span>
        <strong>{formattedValue}</strong>
        <button onClick={handleRemoveItem}>Remover</button>
      </ProductInCartDatails>
    </ProductInCartContainer>
  )
}

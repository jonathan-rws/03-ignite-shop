import axios from 'axios'
import { X } from 'phosphor-react'

import { useShoppingCart } from 'use-shopping-cart'
import { ProductInCart } from '../ProductInCart'

import {
  BuyNowButton,
  CartSidebarContainer,
  CartSidebarContent,
  CartSummary,
  CloseButton,
} from './styles'

export function CartSidebar() {
  const {
    cartDetails,
    handleCloseCart,
    shouldDisplayCart,
    cartCount,
    formattedTotalPrice,
  } = useShoppingCart()

  const products = Object.values(cartDetails ?? {}).map((entry) => {
    return entry
  })

  async function handleFinishPurchase() {
    try {
      const checkoutProducts = products.map((product) => {
        return {
          id: product.id,
          price: product.price_id,
          quantity: product.quantity,
        }
      })
      console.log(checkoutProducts)
      const { data } = await axios.post('/api/checkout', cartDetails)

      window.location.href = data.urlSession
    } catch (error) {
      console.log({ Message: error })
    }
  }
  return (
    <CartSidebarContainer className={shouldDisplayCart ? 'open' : ''}>
      <CartSidebarContent>
        <CloseButton onClick={handleCloseCart}>
          <X size={24} />
        </CloseButton>
        <h2>Sacola de Compras</h2>
        {products.map((item) => {
          return (
            <ProductInCart
              key={item.id}
              formattedValue={item.formattedValue}
              id={item.id}
              image={item.image}
              name={item.name}
              quantity={item.quantity}
            />
          )
        })}
        <CartSummary>
          <div>
            <span>Quanidade</span>
            <span>
              {cartCount > 1 ? `${cartCount} itens` : `${cartCount} item`}
            </span>
          </div>
          <div>
            <strong>valor total</strong>
            <strong>{formattedTotalPrice}</strong>
          </div>
        </CartSummary>
        <BuyNowButton onClick={handleFinishPurchase}>
          Finalizar compra
        </BuyNowButton>
      </CartSidebarContent>
    </CartSidebarContainer>
  )
}

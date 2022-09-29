import { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart'
import { CartSidebar } from '../components/CartSidebar'
import { GlobalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

GlobalStyles()
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_PUBLIC_KEY}
      successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={process.env.STRIPE_PUBLIC_KEY}
      currency="BRL"
      allowedCountries={['BR']}
      billingAddressCollection={true}
    >
      <Container>
        <Component {...pageProps} />
        <CartSidebar />
      </Container>
    </CartProvider>
  )
}

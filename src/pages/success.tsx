import { GetServerSideProps } from 'next'
import Image from 'next/future/image'
import { stripe } from '../service/stripe'
import logoImg from '../assets/logo.svg'
import {
  ImageContainer,
  ProductsLisContainer,
  SuccessContainer,
} from '../styles/pages/success'

interface SessionProps {
  session: {
    customerName: string
    productList: {
      id: string
      imageUrl: string
      quantity: number
    }[]
  }
}

export default function Session({ session }: SessionProps) {
  const quantity = session.productList.reduce((acc, product) => {
    return (acc += product.quantity)
  }, 0)

  return (
    <SuccessContainer>
      <Image src={logoImg} alt="" />
      <ProductsLisContainer>
        {session &&
          session.productList.map((product) => {
            return (
              <ImageContainer key={product.id}>
                <Image src={product.imageUrl} width={100} height={120} alt="" />
              </ImageContainer>
            )
          })}
      </ProductsLisContainer>
      <h1>Compra efetuada!</h1>
      <span>
        Uhuul <strong>{session.customerName}</strong>, sua compra de {quantity}{' '}
        camisetas já está a caminho da sua casa.
      </span>
      <a href="">Voltar ao catálogo</a>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id as string
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items.data.price.product'],
  })

  const customerName = session.customer_details.name
  const products = session.line_items.data as any
  const productList = products.map((item) => {
    return {
      id: item.id,
      imageUrl: item.price.product.images[0],
      quantity: item.quantity,
    }
  })
  return {
    props: {
      session: {
        customerName,
        productList,
      },
    },
  }
}

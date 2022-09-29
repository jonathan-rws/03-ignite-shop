import { GetServerSideProps } from 'next'
import Image from 'next/future/image'

import Stripe from 'stripe'
import { stripe } from '../../service/stripe'

import {
  ProductButton,
  ProductContainer,
  ProductDetails,
  ProductImgContainer,
} from '../../styles/pages/product'

import { useShoppingCart } from 'use-shopping-cart'
import { Product as ProductType } from 'use-shopping-cart/core'
import { Header } from '../../components/Header'
interface ProductProps {
  product: {
    id: string
    name: string
    imgUrl: string
    formatedPrice: string
    price: number
    description: string
    priceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart()
  // const [isLoading, setIsLoading] = useState(false)

  // async function handleCreateCheckout() {
  //   setIsLoading(true)
  //   try {
  //     const { data } = await axios.post('/api/checkout', {
  //       id: product.priceId,
  //     })
  //     window.location.href = data.urlSession
  //   } catch (error) {
  //     alert('error')
  //   }
  // }

  function handleAddCartItem() {
    const item = {
      name: product.name,
      id: product.id,
      price_id: product.priceId,
      price: product.price,
      currency: 'BRL',
      image: product.imgUrl,
      price_data: {},
      product_data: {},
    } as ProductType
    addItem(item)
  }

  return (
    <>
      <Header />
      <ProductContainer>
        <ProductImgContainer>
          <Image
            src={product.imgUrl}
            width={480}
            height={520}
            alt=""
            priority
          />
        </ProductImgContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span> {product.formatedPrice}</span>
          <p>{product.description}</p>
          <ProductButton onClick={handleAddCartItem} disabled={false}>
            Adicionar ao carrinho
          </ProductButton>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const productId = String(params.id)

  const response = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })
  const price = response.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: response.id,
        name: response.name,
        imgUrl: response.images[0],
        description: response.description,
        priceId: price.id,
        formatedPrice: Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        price: price.unit_amount,
      },
    },
  }
}

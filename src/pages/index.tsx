import Image from 'next/future/image'
import { GetStaticProps } from 'next'
import { stripe } from '../service/stripe'
import { Handbag } from 'phosphor-react'
import { Product as ProductType } from 'use-shopping-cart/core'
import {
  HomeContainer,
  ProductFooter,
  ProductsContainer,
} from '../styles/pages/home'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'
import Link from 'next/link'
import { Header } from '../components/Header'
import { useShoppingCart } from 'use-shopping-cart'

interface HomeProps {
  products: [
    {
      id: string
      name: string
      imgUrl: string
      price: number
      formattedPrice: string
      priceId: string
    },
  ]
}

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart()
  const [sliderRef] = useKeenSlider({
    dragSpeed: 0.6,
    loop: false,
    mode: 'free-snap',

    slides: {
      origin: 'auto',
      perView: 2.3,
      spacing: 20,
    },
  })

  function handleAddCartItem(
    name: string,
    id: string,
    priceId: string,
    price: number,
    imgUrl: string,
  ) {
    const item = {
      name,
      id,
      price_id: priceId,
      price,
      currency: 'BRL',
      image: imgUrl,
      price_data: {},
      product_data: {},
    } as ProductType
    addItem(item)
  }

  return (
    <>
      <Header />
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <ProductsContainer
              className="keen-slider__slide number-slide1"
              key={product.id}
            >
              <Link href={`product/${product.id}`}>
                <a>
                  <Image
                    src={product.imgUrl}
                    width={480}
                    height={520}
                    alt=""
                    priority
                  />
                </a>
              </Link>

              <ProductFooter>
                <div>
                  <span>Camiseta Beyond the limits</span>
                  <strong>{product.formattedPrice}</strong>
                </div>
                <button>
                  <Handbag
                    size={32}
                    color="#FFFFFF"
                    weight="bold"
                    onClick={() =>
                      handleAddCartItem(
                        product.name,
                        product.id,
                        product.priceId,
                        product.price,
                        product.imgUrl,
                      )
                    }
                  />
                </button>
              </ProductFooter>
            </ProductsContainer>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })
  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imgUrl: product.images[0],
      priceId: price.id,
      price: price.unit_amount,
      formattedPrice: Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })
  return {
    props: { products },
    revalidate: 1,
  }
}

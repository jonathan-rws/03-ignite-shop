import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../service/stripe'

interface ItemProps {
  price_id: string
  quantity: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ Error: 'error' })
  }
  const lineItems: any = Object.values(req.body ?? {}).map(
    (item: ItemProps) => {
      return { price: item.price_id, quantity: item.quantity }
    },
  )

  const session = await stripe.checkout.sessions.create({
    cancel_url: `${process.env.NEXT_URL}/`,
    success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    mode: 'payment',
    line_items: lineItems,
  })
  res.status(201).json({ urlSession: session.url })
}

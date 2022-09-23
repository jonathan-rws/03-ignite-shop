import {AppProps} from 'next/app'
import { GlobalStyles } from '../styles/global'


GlobalStyles()
export default function MyApp({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />
}


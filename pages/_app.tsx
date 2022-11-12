import '../styles/globals.css'
import '../public/font/WebFonts/css/fontiran.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return <>
    <NextNProgress
      color="#61dbfb"
      stopDelayMs={200}
      height={5}
    />
    <Component {...pageProps} />
  </>
}

export default MyApp

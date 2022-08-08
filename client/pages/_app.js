import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import { GlobalStyles } from 'twin.macro'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
    < Component {...pageProps } />
    </Layout>
    </>
  )
}

export default MyApp

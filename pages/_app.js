import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className='main'>
      <div className='content'>
      <Component {...pageProps} />
      </div>
      </div>
    </Layout>
  )
}

export default MyApp

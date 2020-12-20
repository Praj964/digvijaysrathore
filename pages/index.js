import Head from 'next/head'
import Layout from '../src/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>hey!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout>
        <p>Hello everyone!</p>
      </Layout>
    </div>
  )
}

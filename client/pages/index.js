import Head from 'next/head'
import Snippet from '../components/Snippet'



export default function Home() {
  return (
    <div >
      <Head>
        <title>SnippetAi</title>
        <meta name="description" content="Generate marketing snippet for your product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Snippet/>
    </div>
  )
}

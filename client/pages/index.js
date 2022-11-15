import Head from 'next/head'
import Snippet from '../components/Snippet'
import Logo from '../public/logo.svg'
import Image from 'next/image'


export default function Home() {
  return (
    <div className = "bg-white/20 rounded-xl p-4 backdrop-blur-xl flex justify-center items-center flex-col m-10 max-w-[60vw]">
      <Head>
        <title>SnippetAi</title>
        <meta name="description" content="Generate marketing snippet for your product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src={Logo} className="w-20 h-20 animate-spin-slow" />
      <Snippet/ >

    </div>
  )
}

import Head from 'next/head'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movie Financials</title>
      </Head>
      <Navbar />
    </div>
  )
}
import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Showcase } from '../components/Showcase'
import { Container } from '@chakra-ui/react'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Movie Financials</title>
      </Head>
      <Container maxW="container.lg">
      <Navbar />
        <Showcase />
      </Container>
      

    </div>
  )
}

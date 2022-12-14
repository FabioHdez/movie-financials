import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Showcase } from '../components/Showcase'
import { MovieRow } from '../components/MovieRow'
import { GameShowcase } from '../components/GameShowcase'
import { Footer } from '../components/Footer'

import { Container } from '@chakra-ui/react'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Movie Financials</title>
      </Head>
      <Container maxW="container.lg" py={8}>
      <Navbar />
      <Showcase />
      <MovieRow listName='My list'/>
      <MovieRow listName='Most Expensive'/>
      <GameShowcase />
      <Footer />
      </Container>
    </div>
  )
}

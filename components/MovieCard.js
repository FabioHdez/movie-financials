import { Image,Button, Center } from '@chakra-ui/react'

export const MovieCard = () => {
  return (
    <>
      <Image justify = "center" h={'85%'} w={"full"} maxW={48} src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tTDsCVlDA8QR4Dc6t6nERfwl5z.jpg"/>
      <Center p={2}>
      <Button colorScheme={'cyan'} variant='solid' size='lg'>Surf's Up</Button>
      </Center>
    </>
  )
}

import { Box, SimpleGrid ,Heading,Center, Hide } from "@chakra-ui/react"
import { MovieCard } from "./MovieCard";


export const MovieRow = ({listName}) => {
  return (
    <Box >
      <Heading as="h2" size="xl" py={5}>
        {listName}:
      </Heading>
      <SimpleGrid columns={{base:2,md:4}} spacing={3}>
        <Center>
        <Box h={{base:64,md:96}}><MovieCard /></Box></Center>
        <Center>
        <Box h={{base:64,md:96}}><MovieCard /></Box></Center>
        <Center><Hide below='md'><Box h={{base:64,md:96}}><MovieCard /></Box></Hide></Center>
        <Center><Hide below='md'><Box h={{base:64,md:96}}><MovieCard /></Box></Hide></Center>
      </SimpleGrid >
    </Box>
  );
}

import { Box, SimpleGrid ,Heading,Show, Hide } from "@chakra-ui/react"
import { MovieCard } from "./MovieCard";


export const MovieRow = ({listName}) => {
  return (
    <Box >
      <Heading as="h2" size="xl" py={5}>
        {listName}:
      </Heading>
      <SimpleGrid columns={{base:2,md:4}} spacing={3}>
        <Box h={{base:64,md:80}} bgColor={'tomato'}><MovieCard /></Box>
        <Box h={{base:64,md:80}} bgColor={'tomato'}><MovieCard /></Box>
        <Hide below='md'><Box h={{base:64,md:80}} bgColor={'tomato'}><MovieCard /></Box></Hide>
        <Hide below='md'><Box h={{base:64,md:80}} bgColor={'tomato'}><MovieCard /></Box></Hide>
      </SimpleGrid >
    </Box>
  );
}

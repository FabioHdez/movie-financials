import { Box,SimpleGrid,Heading,VStack,Text,Center,Button } from '@chakra-ui/react'

export const Showcase = () => {
  return (
    <>
      <Box
        borderRadius={"lg"}
        bgPosition={"center"}
        bgSize={"cover"}
        bgImg={
          "linear-gradient(rgba(0, 0, 0, .8),rgba(0, 0, 0, .8)) , url('https://image.tmdb.org/t/p/w1280_and_h720_bestv2/3O2xGKo172vfbX4dm4eyamYa6Yh.jpg')"
        }
        w={"full"}
        h={{ base: "xs", md: "md", xl: "xl" }}
      >
        <SimpleGrid columns={{ sm: 1, md: 2 }} h={"full"}>
          <Center>
            <VStack alignItems="center" color={"white"}>
              <Heading as="h2" size="2xl" pb={{ sm: 0, md: 4 }}>
                Surf's Up
              </Heading>
              <Text>Budget: $100M </Text>
              <Text>Box Office: $145M </Text>
            </VStack>
          </Center>         
          <Center>
          <Button colorScheme={'cyan'} variant='solid' size='lg'>
            View Details
          </Button>
          </Center>
        </SimpleGrid>
      </Box>
    </>
  );
}

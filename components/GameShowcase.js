import { Box,SimpleGrid,Heading,VStack,Text,Center,Button } from '@chakra-ui/react'

export const GameShowcase = () => {
  return (
      <Box
        borderRadius={"lg"}
        bgPosition={"center"}
        bgSize={"cover"}
        bgColor = {'gray.900'}
        w={"full"}
        h={48}
        my={8}
      >
          <Center p={5}>
            <VStack color={"white"}>
              <Heading as="h2" size="2xl" pb={{ sm: 0, md: 4 }}>
                Higher or lower
              </Heading>
              <Text>Play higher or lower using movie data. </Text>
              <Button colorScheme={'cyan'} variant='solid' size='lg'>Play Now</Button>
            </VStack>
          </Center>         
      </Box>
  );
}

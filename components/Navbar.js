import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Box,Container,SimpleGrid,Input,IconButton,HStack,Flex } from '@chakra-ui/react'
import { FaSearch, FaUserAlt} from 'react-icons/fa'
export const Navbar = () => {
  return (
    // give the scroll property to hide when scrolling down:
    // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    
    <Box w="100%" pt={10}>
      <Container maxW="container.lg">
        <HStack justify={'center'}> 
            <ColorModeSwitcher />
            <Input placeholder='Search for a movie' maxW={'4xl'} size='lg' />
            <IconButton aria-label='Search database' icon={<FaSearch />} variant="ghost" />
            <IconButton aria-label='Profile' icon={<FaUserAlt />} variant="ghost" />
        </HStack>
      </Container>
    </Box>
  );
}

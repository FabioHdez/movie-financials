import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Box,Container,SimpleGrid,Input,IconButton,HStack,Flex } from '@chakra-ui/react'
import { FaSearch, FaUserAlt} from 'react-icons/fa'
export const Navbar = () => {
  return (
    
    <Box w="100%" pb={8}>
        <HStack justify={'center'}> 
            <ColorModeSwitcher />
            <Input placeholder='Search for a movie' maxW={'4xl'} size='lg' />
            <IconButton aria-label='Search database' icon={<FaSearch />} variant="ghost" />
            <IconButton aria-label='Profile' icon={<FaUserAlt />} variant="ghost" />
        </HStack>
    </Box>
  );
}

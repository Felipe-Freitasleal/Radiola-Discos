import {
  Box,
  useColorModeValue,
  Input,

} from "@chakra-ui/react";


const Nav = (props) => {

  const {
    name,
    setName
  } = props



  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      display={'flex'}
      flexDir={'row'}
      justifyContent={'center'}
      p={1}
      alignItems={'center'}
      w={"100%"}
    >
      <Input
        bg={useColorModeValue('gray.50', 'gray.900')}
        placeholder='busque por artista'
        size='sm'
        maxW={'400px'}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </Box>
  )
}

export default Nav
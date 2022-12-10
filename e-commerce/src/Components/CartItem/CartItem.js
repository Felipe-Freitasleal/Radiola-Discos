import {
  Button,
  Flex,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react"
// 1. Import the utilities
import { extendTheme } from '@chakra-ui/react'

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

// 3. Extend the theme
const theme = extendTheme({ breakpoints })

const CartItem = (props) => {

  const {
    produto,
    cartData,
    setCartData
  } = props


  const removerProduto = (produto) => {
    const novoCartData = [...cartData]
    const indexDoProduto = novoCartData.indexOf(produto)
    console.log(indexDoProduto)
    novoCartData.splice(indexDoProduto, 1)
    console.log(novoCartData)
    setCartData(novoCartData)
  }

  return (
    <Flex
      border={"1px solid lightgrey"}
      borderRadius={" 8px"}
      overflow={"hidden"}
      height={"100%"}
      width={"100%"}>
      <Img src={produto.capa}
        maxH={"28vh"}
        maxW={"32vw"} />
      <Flex
        w={"100%"}
        p={4}
        flexDir={"row"}
        justifyContent={'space-between'}
        alignItems={"center"}>
        <Stack
          display={"flex"}
          flexDir={"column"}>
          <Text fontSize='md' fontWeight="bold">{produto.nameAlbum}</Text>
          <Text fontSize='sm' color="grey">{produto.author}</Text>
        </Stack>
        <Stack>
          <Text fontSize='xl' fontWeight={"bold"}>R${produto.value}</Text>
          <Button
            variant='ghost'
            colorScheme='red'
            border={"1px solid lightgrey"}
            onClick={() => removerProduto(produto)}>
            X
          </Button>
        </Stack>
      </Flex>
    </Flex>
  )
}

export default CartItem
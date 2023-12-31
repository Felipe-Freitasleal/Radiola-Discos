import { Button, Flex, Img, Stack, Text } from "@chakra-ui/react";
// import { extendTheme } from '@chakra-ui/react'

// const breakpoints = {
//   sm: '320px',
//   md: '768px',
//   lg: '960px',
//   xl: '1200px',
//   '2xl': '1536px',
// }

// const theme = extendTheme({ breakpoints })

const CartItem = ({ produto, cartData, setCartData }) => {
  const removerProduto = (produto) => {
    const novoCartData = [...cartData];
    const indexDoProduto = novoCartData.indexOf(produto);
    // console.log(indexDoProduto);
    novoCartData.splice(indexDoProduto, 1);
    // console.log(novoCartData);
    setCartData(novoCartData);
  };

  return (
    <Flex
      border={"1px solid lightgrey"}
      borderRadius={" 8px"}
      overflow={"hidden"}
      height={"100%"}
      width={"100%"}
    >
      <Img
        src={produto.capa}
        alt="Capa disco"
        borderRadius="lg"
        rounded={"lg"}
        objectFit={"cover"}
        maxH={150}
        minH={20}
        w={200}
        maxW={200}
        minW={30}
      />
      <Flex
        w={"100%"}
        p={4}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack display={"flex"} flexDir={"column"}>
          <Text fontSize="md" fontWeight="bold">
            {produto.nameAlbum}
          </Text>
          <Text fontSize="sm" color="grey">
            {produto.author}
          </Text>
        </Stack>
        <Stack>
          <Text fontSize="xl" fontWeight={"bold"}>
            R${produto.value}
          </Text>
          <Button
            variant="ghost"
            colorScheme="red"
            border={"1px solid lightgrey"}
            onClick={() => removerProduto(produto)}
          >
            X
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default CartItem;

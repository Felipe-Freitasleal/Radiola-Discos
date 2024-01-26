import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  Img,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { CiTrash } from "react-icons/ci";
// import { extendTheme } from '@chakra-ui/react'

// const breakpoints = {
//   sm: '320px',
//   md: '768px',
//   lg: '960px',
//   xl: '1200px',
//   '2xl': '1536px',
// }

// const theme = extendTheme({ breakpoints })

const CartItem = ({ disco, cartData, setCartData, deleteAlbumToast }) => {
  const [deleteAlert, setDeleteAlert] = useState(false);

  const deleteProduct = (disco) => {
    let novoCartData = [...cartData];
    const findDisco = novoCartData.find((disc) => disc === disco);
    const filterArray = novoCartData.filter((item) => {
      return item.id !== findDisco.id;
    });
    setCartData(filterArray);
    novoCartData = filterArray;
    deleteAlbumToast();
  };

  const handlePlus = (product) => {
    const newCartData = [...cartData];
    let findAlbum = newCartData.find((item) => item.id === product.id);
    findAlbum = { ...findAlbum, quantidade: findAlbum.quantidade + 1 };
    const findIndex = newCartData.findIndex((item) => item.id === product.id);
    newCartData.splice(findIndex, 1, findAlbum);
    setCartData(newCartData);
  };

  const handleLess = (product) => {
    const newCartData = [...cartData];
    let findAlbum = newCartData.find((item) => item.id === product.id);

    findAlbum = { ...findAlbum, quantidade: findAlbum.quantidade - 1 };

    if (findAlbum.quantidade < 1) {
      setDeleteAlert(true);
      // deleteProduct(product);
    }

    if (findAlbum.quantidade === 1 || findAlbum.quantidade > 1) {
      const findIndex = newCartData.findIndex((item) => item.id === product.id);
      newCartData.splice(findIndex, 1, findAlbum);
      setCartData(newCartData);
    }
  };

  return (
    <Flex
      border={"1px solid lightgrey"}
      borderRadius={"8px"}
      overflow={"hidden"}
      height={"8rem"}
      width={"100%"}
      background={"#F5F5F5"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Img
        src={`data:image/png;base64,${disco.capa}`}
        alt={`cover ${disco.nome}`}
        borderRadius="lg"
        rounded={"lg"}
        objectFit={"fill"}
        height={"6rem"}
        width={"6rem"}
        ml={{ base: 1, md: 4 }}
      />
      <Box
        w={"100%"}
        p={{ base: 1, md: 6 }}
        display={"grid"}
        gridTemplateColumns={{ base: "2fr 1fr", md: "4fr 1fr 1fr" }}
        gridTemplateRows={{ base: "1fr 1fr", md: "1fr" }}
        alignItems={"center"}
      >
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          gridRow={{ base: "1 / 2", md: "1 / 2" }}
          gridColumn={{ base: "1 / 3", md: "1 / 2" }}
          justifySelf={"start"}
        >
          <Text fontSize="sm" fontWeight="bold">
            {disco.nome}
          </Text>
          <Text fontSize="sm" color="grey">
            {disco.artista}
          </Text>
        </Flex>

        <Flex
          flexDirection={"row"}
          alignItems={"center"}
          gridRow={{ base: "2 / 3", md: "1 / 2" }}
          gridColumn={{ base: "1 / 2", md: "2 / 3" }}
          justifySelf={{ base: "start", md: "center" }}
        >
          <Button
            variant="ghost"
            bg={"green.200"}
            style={{
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
            onClick={() => handleLess(disco)}
          >
            -
          </Button>
          <Button
            variant="ghost"
            bg={"green.200"}
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
            onClick={() => handlePlus(disco)}
          >
            +
          </Button>
          <Text ml={2}>{disco.quantidade}</Text>
        </Flex>

        <Flex
          flexDir={"row"}
          alignItems={"center"}
          gridRow={{ base: "2 / 3", md: "1 / 2" }}
          gridColumn={{ base: "2 / 3", md: "3 / 4" }}
          justifySelf={"end"}
        >
          <Text fontSize="xl" fontWeight={"bold"}>
            R${disco.preco}
          </Text>
          <Button
            variant="ghost"
            _hover={{
              color: "red",
            }}
            textAlign={"center"}
            onClick={() => setDeleteAlert(true)}
          >
            <CiTrash width={"100%"} />
          </Button>
        </Flex>
      </Box>

      <AlertDialog isOpen={deleteAlert}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Excluir Disco
            </AlertDialogHeader>
            <AlertDialogBody>
              Você deseja excluir o disco do carrinho de compras?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button variant="ghost" onClick={() => setDeleteAlert(false)}>
                Cancelar
              </Button>
              <Button
                variant="ghost"
                bg={"red.400"}
                onClick={() => {
                  deleteProduct(disco);
                  setDeleteAlert(false);
                }}
                ml={3}
              >
                Excluir
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
};

export default CartItem;

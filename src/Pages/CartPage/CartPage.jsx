import {
  AbsoluteCenter,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import * as React from "react";
import { CartOrderSummary } from "../../Components/CartOrderSummary/CartOrderSummary";
import CartItem from "../../Components/CartItem/CartItem";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import cartVazio from "../../assets/carrinho-vazio.png";
import Footer from "../../Components/Footer/Footer.jsx";

export const CartPage = () => {
  const context = useContext(GlobalContext);
  const { cartData, setCartData, total } = context;
  const toast = useToast();

  const deleteAlbumToast = () => {
    return toast({
      title: "Disco excluído do carrinho",
      status: "success",
      isClosable: true,
      duration: 4000,
      position: "top",
    });
  };

  return (
    <Flex
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Header cartData={cartData} />
      <Box
        w={"100%"}
        h={"4rem"}
        fontSize="2xl"
        fontWeight="extrabold"
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        Carrinho
      </Box>

      <Grid
        w={{ base: "auto", md: "90vw" }}
        minH={"50vh"}
        gridTemplateColumns={`1fr ${{ base: "0px", md: "320px" }}`}
        gridTemplateRows={"3fr 300px"}
        alignItems={"start"}
        gap={"2rem"}
        padding={{ base: "0.5rem" }}
      >
        <Stack
          gridRow={"1 / 2"}
          gridColumn={{ base: "1 / 3", md: "1 / 2" }}
          spacing="2"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={`${cartData.length !== 0 ? "start" : "center"}`}
          alignItems={"center"}
          h={"100%"}
        >
          {cartData.length !== 0 ? (
            cartData.map((disco) => (
              <CartItem
                key={disco.id}
                disco={disco}
                cartData={cartData}
                setCartData={setCartData}
                deleteAlbumToast={deleteAlbumToast}
              />
            ))
          ) : (
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              pt={4}
            >
              <Text textAlign={"center"} fontSize={"24px"} fontWeight={600}>
                Carrinho vazio
              </Text>
              <img
                src={cartVazio}
                alt={"carrinho vazio"}
                style={{
                  margin: "0 auto",
                }}
              />
            </Flex>
          )}
        </Stack>
        <GridItem
          gridRow={{ base: "2 / 3", md: "1 / 2" }}
          gridColumn={{ base: "1 / 3", md: "2/ 3" }}
          display={"flex"}
          direction="column"
          align="end"
          // pt={4}
          w={"auto"}
        >
          <CartOrderSummary total={total} />
        </GridItem>
      </Grid>
      <Box w={"100%"}>
        <Footer />
      </Box>
    </Flex>
  );
};

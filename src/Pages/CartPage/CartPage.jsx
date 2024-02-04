import {
  Box,
  Flex,
  Grid,
  GridItem,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import * as React from "react";
import { CartOrderSummary } from "../../Components/CartOrderSummary/CartOrderSummary";
import CartItem from "../../Components/CartItem/CartItem";
import HeaderLg from "../../Components/Header/HeaderLg.jsx";
import { GlobalContext } from "../../Contexts/GlobalContext.jsx";
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
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      minHeight={"100vh"}
    >
      <HeaderLg />
      <Box
        w={"100%"}
        h={"4rem"}
        fontSize="2xl"
        fontWeight={600}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        alignSelf={"end"}
      >
        Carrinho
      </Box>
      <Grid
        width={{ base: "95%", md: "90vw", lg: "85vw", xl: "80vw" }}
        gridTemplateColumns={`1fr ${{ base: "0px", md: "320px" }}`}
        gridTemplateRows={"1fr 0fr"}
        alignItems={"start"}
        columnGap={{ base: 0, md: "1rem" }}
        rowGap={{ base: "1rem", md: 0 }}
        flexGrow={1}
        mb={"16px"}
      >
        <Stack
          gridRow={"1 / 2"}
          gridColumn={{ base: "1 / 3", md: "1 / 2", lg: "1 / 2", xl: "1 / 2" }}
          spacing="2"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={`${cartData.length !== 0 ? "start" : "center"}`}
          alignItems={"center"}
          height={"100%"}
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
          w={"auto"}
          position={"sticky"}
          top={100}
          left={0}
        >
          <CartOrderSummary total={total} />
        </GridItem>
      </Grid>
      <Box width={"100%"}>
        <Footer />
      </Box>
    </Box>
  );
};

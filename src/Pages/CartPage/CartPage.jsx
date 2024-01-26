import { Box, Flex, Heading, Stack, Text, useToast } from "@chakra-ui/react";
import * as React from "react";
import { CartOrderSummary } from "../../Components/CartOrderSummary/CartOrderSummary";
import CartItem from "../../Components/CartItem/CartItem";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import cartVazio from "../../assets/carrinho-vazio.png";

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
      width={"100%"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"space-between"}
      gap={"1rem"}
    >
      <Header cartData={cartData} />
      <Heading fontSize="2xl" fontWeight="extrabold" mx="auto">
        Carrinho
      </Heading>
      <Box
        width={"auto"}
        mx={{ base: "0.4rem", md: "2rem" }}
        mb={{ base: "0.6rem", md: "0" }}
        minH={"70vh"}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        gap={"1rem"}
        // border={"solid red 1px"}
        position={"relative"}
      >
        <Stack
          spacing="6"
          width={"100%"}
          // border={"solid green 1px"}
          height={"auto"}
          position={"relative"}
          py={{ base: 0, md: 4 }}
          // overflowY={"scroll"}
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
              height={"100%"}
              width={"100%"}
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
        <Flex
          direction="column"
          align="end"
          flex="1"
          // border={"solid pink 1px"}
          pt={4}
        >
          <CartOrderSummary total={total} />
        </Flex>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

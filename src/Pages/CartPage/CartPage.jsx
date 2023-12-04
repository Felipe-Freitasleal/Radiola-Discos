import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/react";
import * as React from "react";
import { CartOrderSummary } from "../../Components/CartOrderSummary/CartOrderSummary";
import CartItem from "../../Components/CartItem/CartItem";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

export const CartPage = (props) => {
  const { cartData, setCartData, total } = props;

  return (
    <Box
      height={"100vh"}
      width={"100%"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"space-between"}
      gap={"1rem"}
    >
      <Header cartData={cartData} />
      <Box
        width={"100%"}
        mx="auto"
        px={{ base: "4", md: "8", lg: "10" }}
        py={{ base: "6", md: "8", lg: "12" }}
        minH={"60vh"}
      >
        <Stack spacing={{ base: "8", md: "10" }} flex="2" ml={"1rem"}>
          <Heading fontSize="2xl" fontWeight="extrabold">
            Carrinho de compras:
          </Heading>
          <Stack spacing="6">
            {cartData.map((produto) => (
              <CartItem
                key={produto.idAlbum}
                produto={produto}
                cartData={cartData}
                setCartData={setCartData}
              />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="end" flex="1">
          <CartOrderSummary total={total} />
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import * as React from "react";
import { CartOrderSummary } from "../../Components/CartOrderSummary/CartOrderSummary";
import CartItem from "../../Components/CartItem/CartItem";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";

export const CartPage = () => {
  // const { cartData, setCartData, total } = props;
  const context = useContext(GlobalContext);
  const { cartData, setCartData, total } = context;

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
        Carrinho:
      </Heading>
      <Box
        width={"100%"}
        mx="auto"
        p={4}
        minH={"60vh"}
        display={"flex"}
        flexDirection={{ base: "column-reverse", md: "row" }}
        gap={"1rem"}
        border={"solid red 1px"}
      >
        <Stack spacing="6" width={"100%"}>
          {cartData.map((produto) => (
            <CartItem
              key={produto.idAlbum}
              produto={produto}
              cartData={cartData}
              setCartData={setCartData}
            />
          ))}
        </Stack>
        <Flex direction="column" align="end" flex="1">
          <CartOrderSummary total={total} />
        </Flex>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

import {
  Button,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

export const CartOrderSummary = ({ total }) => {
  return (
    <Flex
      border={"1px solid lightgrey"}
      borderRadius={"8px"}
      width={{ base: "100%", md: "320px" }}
      h={"300px"}
      p={4}
      flexDir={"column"}
      justifyContent={"space-between"}
    >
      <Text fontSize="2xl" fontWeight="extrabold" textAlign={"start"}>
        Resumo do pedido.
      </Text>
      <Stack display={"flex"} flexDir={"row"} justifyContent={"space-between"}>
        <Text fontSize="md" color="grey">
          Sub Total:
        </Text>
        <Text fontSize="md" color="grey">
          R$ {total}
        </Text>
      </Stack>
      <Stack
        display={"flex"}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontSize="md" color="grey">
          Taxa de Frete
        </Text>
        <Link color={mode("blue.500", "blue.200")}>Calcular Frete</Link>
      </Stack>
      <Stack
        display={"flex"}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontSize="md" color="grey">
          Cupom de desconto
        </Text>
        <Link color={mode("blue.500", "blue.200")}>Adicionar Cupom</Link>
      </Stack>
      <Stack
        display={"flex"}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontSize="xl">Total:</Text>
        <Text fontSize="xl" fontWeight={"bold"}>
          R$ {total}
        </Text>
      </Stack>
      <Button variant="ghost" colorScheme="green" bg={"green.300"}>
        Comprar Itens
      </Button>
    </Flex>
  );
};

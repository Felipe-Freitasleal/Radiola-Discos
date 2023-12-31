import {
  Button,
  Text,
  Input,
  Image,
  Box,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { CiShoppingCart, CiHome } from "react-icons/ci";
import { goToCartPage, goToHomePage } from "../../Routes/coordinato";
import { useLocation, useNavigate } from "react-router-dom";
import imagemLogo from "../../assets/Picsart_23-11-15_22-35-13-818.png";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";

function Header() {
  const context = useContext(GlobalContext);
  const { name, setName, cartData } = context;

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <SimpleGrid
      display={"flex"}
      flexDir={{ base: "column", lg: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={"black"}
      color={"white"}
      px={{ base: 4, lg: 12 }}
      py={2}
      gap={"1rem"}
      position={"sticky"}
      top={0}
      left={0}
      zIndex={1}
    >
      <Box
        display={"flex"}
        flexDir={"row"}
        alignItems={"center"}
        width={"320px"}
      >
        <Image width={"75px"} height={"75px"} alt="logo" src={imagemLogo} />
        <Text
          fontSize="3xl"
          textAlign={"center"}
          fontFamily={"initial"}
          width={"100%"}
        >
          Radiola Discos
        </Text>
      </Box>
      <Box
        display={"flex"}
        flexDir={{ base: "column", lg: "row" }}
        alignItems={"center"}
        gap={"1rem"}
        justifyContent={"end"}
        width={"100%"}
      >
        {location.pathname === "/" && (
          <Input
            bg={"white"}
            placeholder="busque por disco"
            color={"black"}
            size="sm"
            width={{
              base: "100%",
              lg: "420px",
            }}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        )}
        <Stack
          display={"flex"}
          flexDir={"row"}
          alignItems={"end"}
          justifyContent={{ base: "center", lg: "end" }}
          gap={"1rem"}
          height={"40px"}
          width={{ base: "100%", lg: "auto" }}
        >
          {location.pathname !== "/" && (
            <Button
              onClick={() => goToHomePage(navigate)}
              variant="solid"
              color={"white"}
              bg={"black"}
              border={"solid white 2px"}
              _hover={{
                opacity: "0.8",
                bg: "white",
                color: "black",
              }}
            >
              <CiHome />
            </Button>
          )}
          {location.pathname === "/carrinho" ? (
            <></>
          ) : (
            <Button
              onClick={() => goToCartPage(navigate)}
              variant="solid"
              color={"white"}
              bg={"black"}
              border={"solid white 2px"}
              _hover={{
                opacity: "0.8",
                bg: "white",
                color: "black",
              }}
            >
              <CiShoppingCart /> <Box ml={"0.5rem"}>{cartData.length}</Box>
            </Button>
          )}
        </Stack>
      </Box>
    </SimpleGrid>
  );
}

export default Header;

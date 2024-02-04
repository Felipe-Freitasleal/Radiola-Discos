import {
  Button,
  Text,
  Input,
  Image,
  Box,
  SimpleGrid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  useDisclosure,
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";
import { CiShoppingCart, CiHome } from "react-icons/ci";
import { goToCartPage, goToHomePage } from "../../Routes/Coordinato";
import { useLocation, useNavigate } from "react-router-dom";
import imagemLogo from "../../assets/Picsart_23-11-15_22-35-13-818.png";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { useContext } from "react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

function Header({ setGender, setArtist }) {
  const context = useContext(GlobalContext);
  const { name, setName, cartData } = context;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <SimpleGrid
      display={"flex"}
      flexDir={"column"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      bg={"black"}
      color={"white"}
      position={"sticky"}
      top={0}
      left={0}
      zIndex={1}
      width={"100%"}
      height={"8rem"}
      p={{
        base: "1rem",
        md: "1rem 3.5rem",
        lg: "1rem 4.5rem",
        xl: "1rem 7.5rem",
      }}
    >
      <Flex
        flexDir={"row"}
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          width={{ base: "8rem", md: "16rem" }}
        >
          <Image width={"65px"} height={"65px"} alt="logo" src={imagemLogo} />
          <Text
            fontSize={"1xl"}
            textAlign={"center"}
            width={"100%"}
            fontFamily={"inherit"}
            fontWeight={400}
            lineHeight={"1.25rem"}
            textTransform={"uppercase"}
          >
            Radiola Discos
          </Text>
        </Box>
        <Box>
          <Button
            onClick={() => {
              if (location.pathname !== "/") goToHomePage(navigate);
              if (location.pathname === "/") goToCartPage(navigate);
            }}
            variant={"solid"}
            color={"white"}
            bg={"black"}
            _hover={{
              color: "grey",
            }}
            fontFamily={"inherit"}
            fontWeight={400}
            lineHeight={"1.25rem"}
          >
            {location.pathname !== "/" ? (
              <CiHome />
            ) : (
              <>
                <CiShoppingCart /> <Box ml={"0.5rem"}>{cartData.length}</Box>
              </>
            )}
          </Button>
          {location.pathname === "/" && (
            <>
              <Button
                variant={"ghost"}
                _hover={{ opacity: "0.5" }}
                onClick={onOpen}
              >
                <HamburgerIcon />
              </Button>
              <Drawer
                placement={"top"}
                onClose={onClose}
                isOpen={isOpen}
                color={"white"}
                bg={"rgba(0, 0, 0, 0.5)"}
                size={"sm"}
                variant={"solid"}
              >
                <DrawerOverlay />
                <DrawerContent
                  bg={"black"}
                  border={"none"}
                  display={"flex"}
                  flexDir={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <DrawerCloseButton color={"white"} bg={"black"} />
                  <DrawerHeader color={"white"} bg={"black"}>
                    Filtros
                  </DrawerHeader>
                  <DrawerBody
                    display={"flex"}
                    flexDir={"row"}
                    justifyContent={"center"}
                    alignItems={"start"}
                  >
                    <Menu closeOnSelect={true}>
                      <MenuButton
                        as={Button}
                        p={1}
                        rightIcon={<ChevronDownIcon />}
                        variant="solid"
                        color={"white"}
                        bg={"black"}
                        _expanded={{
                          textDecoration: "underline",
                          bg: "black",
                        }}
                        _focus={{
                          textDecoration: "underline",
                          bg: "black",
                        }}
                        fontFamily={"inherit"}
                        fontWeight={400}
                        lineHeight={"1.25rem"}
                        textTransform={"uppercase"}
                      >
                        Gênero
                      </MenuButton>
                      <MenuList bg={"black"} border={"none"}>
                        <MenuItem
                          color={"white"}
                          bg={"black"}
                          _hover={{ opacity: "0.5" }}
                          onClick={(e) => {
                            setGender(e.target.value);
                            onClose();
                          }}
                          value={"heavy metal"}
                        >
                          Heavy metal
                        </MenuItem>
                        <MenuItem
                          color={"white"}
                          bg={"black"}
                          _hover={{ opacity: "0.5" }}
                          onClick={(e) => {
                            setGender(e.target.value);
                            onClose();
                          }}
                          value={"hard rock"}
                        >
                          Hard rock
                        </MenuItem>
                        <MenuItem
                          color={"white"}
                          bg={"black"}
                          _hover={{ opacity: "0.5" }}
                          onClick={(e) => {
                            setGender(e.target.value);
                            onClose();
                          }}
                          value={"rock progressivo"}
                        >
                          Rock progressivo
                        </MenuItem>
                        <MenuItem
                          color={"white"}
                          bg={"black"}
                          _hover={{ opacity: "0.5" }}
                          onClick={(e) => {
                            setGender(e.target.value);
                            onClose();
                          }}
                          value={"reggae"}
                        >
                          Reggae
                        </MenuItem>
                        <MenuItem
                          color={"white"}
                          bg={"black"}
                          _hover={{ opacity: "0.5" }}
                          onClick={(e) => {
                            setGender(e.target.value);
                            onClose();
                          }}
                          value={"pop"}
                        >
                          Pop
                        </MenuItem>
                        <MenuItem
                          color={"white"}
                          bg={"black"}
                          _hover={{ opacity: "0.5" }}
                          onClick={(e) => {
                            setGender(e.target.value);
                            onClose();
                          }}
                          value={""}
                        >
                          Todos os gêneros
                        </MenuItem>
                      </MenuList>
                    </Menu>

                    <Menu closeOnSelect={true}>
                      <MenuButton
                        as={Button}
                        p={1}
                        rightIcon={<ChevronDownIcon />}
                        variant="solid"
                        color={"white"}
                        bg={"black"}
                        _expanded={{
                          textDecoration: "underline",
                          bg: "black",
                        }}
                        _focus={{
                          textDecoration: "underline",
                          bg: "black",
                        }}
                        fontFamily={"inherit"}
                        fontWeight={400}
                        lineHeight={"1.25rem"}
                        textTransform={"uppercase"}
                      >
                        Artista
                      </MenuButton>
                      <MenuList bg={"black"} border={"none"}>
                        <MenuItem
                          color={"white"}
                          bg={"black"}
                          _hover={{ opacity: "0.5" }}
                          onClick={(e) => {
                            setArtist(e.target.value);
                            onClose();
                          }}
                          value={"black sabbath"}
                        >
                          Black Sabbath
                        </MenuItem>
                        <MenuItem
                          color={"white"}
                          bg={"black"}
                          _hover={{ opacity: "0.5" }}
                          onClick={(e) => {
                            setArtist(e.target.value);
                            onClose();
                          }}
                          value={"pink floyd"}
                        >
                          Pink Floyd
                        </MenuItem>
                        <MenuItem
                          color={"white"}
                          bg={"black"}
                          _hover={{ opacity: "0.5" }}
                          onClick={(e) => {
                            setArtist(e.target.value);
                            onClose();
                          }}
                          value={"bob marley"}
                        >
                          Bob Marley
                        </MenuItem>
                        <MenuItem
                          color={"white"}
                          bg={"black"}
                          _hover={{ opacity: "0.5" }}
                          onClick={(e) => {
                            setArtist(e.target.value);
                            onClose();
                          }}
                          value={""}
                        >
                          Todos os artistas
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          )}
        </Box>
      </Flex>
      {location.pathname === "/" && (
        <Box
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          gap={"0.5rem"}
          justifyContent={"start"}
          width={"100%"}
        >
          <Input
            bg={"#373737"}
            placeholder="busque por disco"
            _placeholder={{
              color: "grey",
              fontFamily: "inherit",
            }}
            focusBorderColor={"none"}
            color={"white"}
            size="sm"
            w={"100%"}
            value={name}
            onChange={(event) => setName(event.target.value)}
            border={"none"}
            fontFamily={"inherit"}
          />
        </Box>
      )}
    </SimpleGrid>
  );
}

export default Header;

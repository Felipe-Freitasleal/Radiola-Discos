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
  Tooltip,
} from "@chakra-ui/react";
import { CiShoppingCart, CiHome } from "react-icons/ci";
import { goToCartPage, goToHomePage } from "../../Routes/Coordinato";
import { useLocation, useNavigate } from "react-router-dom";
import imagemLogo from "../../assets/Picsart_23-11-15_22-35-13-818.png";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { useContext, useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Header({ setGender, setArtist }) {
  const context = useContext(GlobalContext);
  const { name, setName, cartData } = context;

  const [isGenderMenuOpen, setIsGenderMenuOpen] = useState(false);
  const [isArtistMenuOpen, setIsArtistMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <SimpleGrid
      display={"flex"}
      flexDir={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={"black"}
      color={"white"}
      position={"sticky"}
      top={0}
      left={0}
      zIndex={1}
      width={"100%"}
      height={"4rem"}
      p={{
        base: "1rem",
        md: "1rem 3.5rem",
        lg: "1rem 4.5rem",
        xl: "1rem 7.5rem",
      }}
      gap={"1rem"}
    >
      <Box
        display={"flex"}
        flexDir={"row"}
        alignItems={"center"}
        width={"16rem"}
      >
        <Image width={"65px"} height={"65px"} alt="logo" src={imagemLogo} />
        <Text
          fontSize="1xl"
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
      <Box
        display={"flex"}
        flexDir={"row"}
        alignItems={"center"}
        gap={"0.5rem"}
        justifyContent={"end"}
        width={"100%"}
      >
        {location.pathname === "/" && (
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
            w={{
              base: "100%",
              lg: "21rem",
            }}
            value={name}
            onChange={(event) => setName(event.target.value)}
            border={"none"}
            fontFamily={"inherit"}
          />
        )}
        <Box flexGrow={1}></Box>
        {location.pathname === "/" && (
          <Menu
            isOpen={isGenderMenuOpen}
            onClose={() => setIsGenderMenuOpen(false)}
          >
            <MenuButton
              as={Button}
              p={1}
              rightIcon={<ChevronDownIcon />}
              variant="solid"
              color={"white"}
              bg={"black"}
              _hover={{
                textDecoration: "underline",
              }}
              _expanded={{
                mt: "-4px",
                bg: "black",
                textDecoration: "underline",
              }}
              fontFamily={"inherit"}
              fontWeight={400}
              lineHeight={"1.25rem"}
              textTransform={"uppercase"}
              onMouseEnter={() => setIsGenderMenuOpen(true)}
              onMouseLeave={() => setIsGenderMenuOpen(false)}
            >
              Gênero
            </MenuButton>
            <MenuList
              bg={"black"}
              border={"none"}
              onMouseEnter={() => setIsGenderMenuOpen(true)}
              onMouseLeave={() => setIsGenderMenuOpen(false)}
            >
              <MenuItem
                color={"white"}
                bg={"black"}
                _hover={{ opacity: "0.5" }}
                onClick={(e) => setGender(e.target.value)}
                value={"heavy metal"}
              >
                Heavy metal
              </MenuItem>
              <MenuItem
                color={"white"}
                bg={"black"}
                _hover={{ opacity: "0.5" }}
                onClick={(e) => setGender(e.target.value)}
                value={"hard rock"}
              >
                Hard rock
              </MenuItem>
              <MenuItem
                color={"white"}
                bg={"black"}
                _hover={{ opacity: "0.5" }}
                onClick={(e) => setGender(e.target.value)}
                value={"rock progressivo"}
              >
                Rock progressivo
              </MenuItem>
              <MenuItem
                color={"white"}
                bg={"black"}
                _hover={{ opacity: "0.5" }}
                onClick={(e) => setGender(e.target.value)}
                value={"reggae"}
              >
                Reggae
              </MenuItem>
              <MenuItem
                color={"white"}
                bg={"black"}
                _hover={{ opacity: "0.5" }}
                onClick={(e) => setGender(e.target.value)}
                value={"pop"}
              >
                Pop
              </MenuItem>
              <MenuItem
                color={"white"}
                bg={"black"}
                _hover={{ opacity: "0.5" }}
                onClick={(e) => setGender(e.target.value)}
                value={""}
              >
                Todos os gêneros
              </MenuItem>
            </MenuList>
          </Menu>
        )}
        {location.pathname === "/" && (
          <Menu
            isOpen={isArtistMenuOpen}
            onClose={() => setIsArtistMenuOpen(false)}
          >
            <MenuButton
              as={Button}
              p={1}
              rightIcon={<ChevronDownIcon />}
              variant="solid"
              color={"white"}
              bg={"black"}
              _hover={{
                textDecoration: "underline",
              }}
              _expanded={{
                mt: "-4px",
                bg: "black",
                textDecoration: "underline",
              }}
              fontFamily={"inherit"}
              fontWeight={400}
              lineHeight={"1.25rem"}
              textTransform={"uppercase"}
              onMouseEnter={() => setIsArtistMenuOpen(true)}
              onMouseLeave={() => setIsArtistMenuOpen(false)}
            >
              Artista
            </MenuButton>
            <MenuList
              bg={"black"}
              border={"none"}
              onMouseEnter={() => setIsArtistMenuOpen(true)}
              onMouseLeave={() => setIsArtistMenuOpen(false)}
            >
              <MenuItem
                color={"white"}
                bg={"black"}
                _hover={{ opacity: "0.5" }}
                onClick={(e) => setArtist(e.target.value)}
                value={"black sabbath"}
              >
                Black Sabbath
              </MenuItem>
              <MenuItem
                color={"white"}
                bg={"black"}
                _hover={{ opacity: "0.5" }}
                onClick={(e) => setArtist(e.target.value)}
                value={"pink floyd"}
              >
                Pink Floyd
              </MenuItem>
              <MenuItem
                color={"white"}
                bg={"black"}
                _hover={{ opacity: "0.5" }}
                onClick={(e) => setArtist(e.target.value)}
                value={"bob marley"}
              >
                Bob Marley
              </MenuItem>
              <MenuItem
                color={"white"}
                bg={"black"}
                _hover={{ opacity: "0.5" }}
                onClick={(e) => setArtist(e.target.value)}
                value={""}
              >
                Todos os artistas
              </MenuItem>
            </MenuList>
          </Menu>
        )}
        <Tooltip
          label={`${
            location.pathname !== "/"
              ? "Página principal"
              : "Carrinho de compras"
          }`}
          hasArrow
        >
          <Button
            onClick={() => {
              if (location.pathname !== "/") goToHomePage(navigate);
              if (location.pathname === "/") goToCartPage(navigate);
            }}
            variant={"solid"}
            color={"white"}
            bg={"black"}
            _hover={{
              color: "lightgrey",
              // mt: "-4px",
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
        </Tooltip>
      </Box>
    </SimpleGrid>
  );
}

export default Header;

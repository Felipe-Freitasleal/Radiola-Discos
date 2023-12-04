import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Button,
  Link,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      width={"100%"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2023 Felipe Leal. All rights reserved</Text>

        <Stack direction={"row"} spacing={6}>
          <Link href="https://www.linkedin.com/in/felipe-freitas-leal/">
            <Button>
              <FaLinkedin />
            </Button>
          </Link>

          <Link href="https://github.com/Felipe-Freitasleal">
            <Button>
              <FaGithub />
            </Button>
          </Link>

          <Link href="https://www.instagram.com/kali_grafia/">
            <Button>
              <FaInstagram />
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;

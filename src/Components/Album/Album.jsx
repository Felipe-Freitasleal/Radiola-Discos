import { useEffect, useState } from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Skeleton,
} from "@chakra-ui/react";
import axios from "axios";

// const IMAGE =
//   "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export function Album({ cartData, setCartData, album }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [musicsList, setMusicsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleModal = () => {
    onOpen();
  };

  const handleCart = () => {
    const newCartData = [...cartData];
    newCartData.push(album);
    setCartData(newCartData);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      getMusics();
    }
  }, [isOpen]);

  const getMusics = async () => {
    try {
      setIsLoading(true);
      const url = `http://localhost:8080/album/songs/${album.id}`;
      console.log("url: ", url);
      const response = await axios.get(url);

      setMusicsList(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        // zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${album.capa})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={`data:image/png;base64,${album.capa}`}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {album.artista}
          </Text>
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
            textAlign={"center"}
          >
            {album.nome}
          </Heading>
          <Stack direction={"column"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              R${album.preco}
            </Text>
            <Button onClick={() => handleModal()}>Ver detalhes</Button>
          </Stack>
        </Stack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{album.nome}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLoading || musicsList.length === 0 ? (
              <Box display="flex" flexDir="column" p="0.5rem" gap="1rem">
                <Skeleton height="1rem" width="100%" />
                <Skeleton height="1rem" width="100%" />
                <Skeleton height="1rem" width="100%" />
                <Skeleton height="1rem" width="100%" />
                <Skeleton height="1rem" width="100%" />
                <Skeleton height="1rem" width="100%" />
              </Box>
            ) : (
              <Box display="flex" flexDir="column" p="0.5rem" gap="1rem">
                {musicsList.map((music) => (
                  <Stack
                    height="1rem"
                    width="100%"
                    display="flex"
                    flexDir="row"
                    justifyContent="space-between"
                  >
                    <Text height="1rem" width="85%">
                      {music.nome}
                    </Text>
                    <Text height="1rem" width="15%">
                      {music.duracao}
                    </Text>
                  </Stack>
                ))}
              </Box>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              colorScheme="green"
              onClick={() => handleCart()}
            >
              Adicionar ao carrinho
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}

import { useEffect, useState } from "react";
import {
  Box,
  Center,
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

export function Album({ cartData, setCartData, album, successToast }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [musicsList, setMusicsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleModal = () => {
    onOpen();
  };

  const handleCart = (album) => {
    const newCartData = [...cartData];
    let findAlbum = newCartData.find((item) => item.id === album.id);

    if (findAlbum) {
      findAlbum = { ...findAlbum, quantidade: findAlbum.quantidade + 1 };
      const findIndex = newCartData.findIndex((item) => item.id === album.id);
      newCartData.splice(findIndex, 1, findAlbum);
      setCartData(newCartData);
      onClose();
    }

    if (!findAlbum) {
      const newAlbum = { ...album, quantidade: 1 };
      newCartData.push(newAlbum);
      setCartData(newCartData);
      onClose();
    }

    successToast();
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
        p={2}
        width={"330px"}
        height={"420px"}
        rounded={"lg"}
        pos={"relative"}
        boxShadow={"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;"}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        _hover={{
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
        }}
        // background={"#F5F5F5"}
      >
        {/* <Box rounded={"lg"} mt={-12} pos={"relative"} height={"230px"}> */}
        <Image
          rounded={"lg"}
          width={"14rem"}
          height={"14rem"}
          objectFit={"contain"}
          src={`data:image/png;base64,${album.capa}`}
          alt={`cover ${album.nome}`}
        />
        {/* </Box> */}
        <Stack pt={5} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {album.artista}
          </Text>
          <Heading
            fontSize={"md"}
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
              <Box display="flex" flexDir="column" gap={"0.5rem"}>
                {musicsList.map((music) => (
                  <Box
                    key={music.id}
                    height="2rem"
                    width="100%"
                    // border={"solid blue 1px"}
                    // style={{
                    //   display: "grid",
                    //   gridTemplateColumns: "88% 13%",
                    //   gridTemplateRows: "2rem",
                    // }}
                    lineHeight={"1rem "}
                  >
                    <Text
                      style={{
                        // gridRow: "1 / 2",
                        // gridColumn: "1 / 2",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "start",
                        width: "auto",
                      }}
                      _hover={{
                        fontWeight: 600,
                      }}
                    >
                      {music.nome}
                    </Text>
                    {/* <Text
                      style={{
                        gridRow: "1 / 2",
                        gridColumn: "2 / 3",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      {music.duracao}
                    </Text> */}
                  </Box>
                ))}
              </Box>
            )}
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              variant="ghost"
              bg={"green.300"}
              onClick={() => handleCart(album)}
            >
              Adicionar ao carrinho
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}

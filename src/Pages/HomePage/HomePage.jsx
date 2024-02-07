import { useContext, useEffect, useState } from "react";
import { Album } from "../../Components/Album/Album";
import Footer from "../../Components/Footer/Footer";
import HeaderLg from "../../Components/Header/HeaderLg.jsx";
import HeaderSm from "../../Components/Header/HeaderSm.jsx";
import {
  Box,
  Container,
  Skeleton,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { GlobalContext } from "../../Contexts/GlobalContext.jsx";
import Carousel from "../../Components/Carousel/Carousel.jsx";

function HomePage() {
  const context = useContext(GlobalContext);
  const { setAlbums, albums, setCartData, cartData, name } = context;
  const toast = useToast();

  const [isLargeThat1000] = useMediaQuery("(min-width: 1000px)");

  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState("");
  const [artist, setArtist] = useState("");

  const successToast = () => {
    return toast({
      title: "Disco adicionado ao carrinho com sucesso!",
      status: "success",
      isClosable: true,
      duration: 4000,
      position: "top",
    });
  };

  useEffect(() => {
    getalbums();
  }, []);

  const getalbums = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:8080/album`);
      if (response.status !== 200) throw new Error(response.message);

      for (let i = 0; response.data.length > i; i++) {
        const filePath = response.data[i].capa.replace("src\\covers\\", "");
        const getCover = await getCovers(filePath);
        response.data[i].capa = getCover;
      }

      setAlbums(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getCovers = async (filePath) => {
    const url = `http://localhost:8080/album/capa/${filePath}`;
    const response = await axios.get(url);
    return response.data;
  };

  return (
    <Box minHeight={"100vh"} display={"flex"} flexDir={"column"}>
      {isLargeThat1000 ? (
        <HeaderLg setGender={setGender} setArtist={setArtist} />
      ) : (
        <HeaderSm setGender={setGender} setArtist={setArtist} />
      )}

      {/* <Carousel /> */}

      <Container
        maxW={"90%"}
        display={"flex"}
        flexDir={"row"}
        justifyContent={"space-evenly"}
        alignContent={"start"}
        flexWrap={"wrap"}
        flexGrow={1}
      >
        {isLoading || albums.length === 0 ? (
          <Box>
            <Skeleton height="300px" width="300px" mt="12px" />
            <Skeleton height="300px" width="300px" />
            <Skeleton height="300px" width="300px" />
            <Skeleton height="300px" width="300px" />
            <Skeleton height="300px" width="300px" />
            <Skeleton height="300px" width="300px" />
            <Skeleton height="300px" width="300px" />
            <Skeleton height="300px" width="300px" />
            <Skeleton height="300px" width="300px" />
          </Box>
        ) : (
          albums
            ?.filter(
              (album) =>
                album?.nome
                  .toLocaleLowerCase()
                  .includes(name.toLocaleLowerCase()) ||
                album?.artista
                  .toLocaleLowerCase()
                  .includes(name.toLocaleLowerCase())
            )
            .filter((album) =>
              album?.genero
                .toLocaleLowerCase()
                .includes(gender.toLocaleLowerCase())
            )
            .filter((album) =>
              album?.artista
                .toLocaleLowerCase()
                .includes(artist.toLocaleLowerCase())
            )
            .map((album) => (
              <Album
                key={album.nome}
                album={album}
                setCartData={setCartData}
                cartData={cartData}
                successToast={successToast}
              />
            ))
        )}
      </Container>
      <Box width={"100%"} alignSelf={"end"}>
        <Footer />
      </Box>
    </Box>
  );
}

export default HomePage;

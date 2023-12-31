import { useContext, useEffect, useState } from "react";
import { Album } from "../../Components/Album/Album";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Box, Container, Skeleton, Stack } from "@chakra-ui/react";
import axios from "axios";
import { GlobalContext } from "../../contexts/GlobalContext";

function HomePage() {
  const context = useContext(GlobalContext);
  const { setAlbuns, albuns, setCartData, cartData, name } = context;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAlbuns();
  }, []);

  const getAlbuns = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:8080/album`);
      if (response.status !== 200) throw new Error(response.message);

      for (let i = 0; response.data.length > i; i++) {
        const filePath = response.data[i].capa.replace("src\\covers\\", "");
        const getCover = await getCovers(filePath);
        response.data[i].capa = getCover;
      }

      setAlbuns(response.data);
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
    <Box maxHeight={"10%"}>
      <Header />
      <Container
        as={Stack}
        maxW={"6xl"}
        display={"flex"}
        flexDir={"row"}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
        minHeight={{
          base: "400px",
          sm: "430px",
          lg: "550px",
          xl: "700px",
          "2xl": "800px",
        }}
      >
        {isLoading || albuns.length === 0 ? (
          <>
            <Skeleton height="300px" width="300px" mt="12px" />
            <Skeleton height="300px" width="300px" />
            <Skeleton height="300px" width="300px" />
            <Skeleton height="300px" width="300px" />
            <Skeleton height="300px" width="300px" />
            <Skeleton height="300px" width="300px" />
            <Skeleton height="300px" width="300px" />
            <Skeleton height="300px" width="300px" />
            <Skeleton height="300px" width="300px" />
          </>
        ) : (
          albuns
            ?.filter((album) =>
              album?.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase())
            )
            .map((album) => (
              <Album
                key={album.id}
                album={album}
                setCartData={setCartData}
                cartData={cartData}
              />
            ))
        )}
      </Container>
      <Box width={"100%"} position={"relatine"} bottom={{ base: 0 }} left={0}>
        <Footer />
      </Box>
    </Box>
  );
}

export default HomePage;

import { Album } from "../../Components/Album/Album";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Box, Container, Stack } from "@chakra-ui/react";

function HomePage(props) {
  const { albuns, cartData, name, setName, setCartData } = props;

  return (
    <Box maxHeight={'10%'}>
      <Header cartData={cartData} name={name} setName={setName} />
      <Container
        as={Stack}
        maxW={"6xl"}
        display={"flex"}
        flexDir={"row"}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
      >
        {/* {ArtistsList.filter((artista) =>
          artista.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        ).map((artista) => {
          return (
            <Artist key={artista.id} artista={artista} setAlbuns={setAlbuns} />
          );
        })} */}
        {
          albuns?.filter((album) => album?.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
          .map((album) => (
            <Album key={album.id} album={album} setCartData={setCartData} />
          ))
        }
      </Container>
      <Footer />
    </Box>
  );
}

export default HomePage;

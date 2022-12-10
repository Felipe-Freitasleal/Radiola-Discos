import { Router } from "./Routes/Router";
import { ChakraProvider } from "@chakra-ui/react"
import { GlobalStyle } from "./GlobalStyled";
import { useEffect, useState } from "react";

function App() {

  const [cartData, setCartData] = useState([])
  const [albums, setAlbums] = useState([])

  console.log(cartData.length)

  const total = cartData.reduce((acumulador, album) => Number(album.value) + acumulador, 0)

  useEffect(() => {
    if(localStorage.length > 0){
  
      const trazerCart = localStorage.getItem("cartData")
      if (trazerCart) {
        const transformarCartData = JSON.parse(trazerCart)
        setCartData(transformarCartData)
      }

      const trazerAlbums = localStorage.getItem("albums")
      if (trazerAlbums) {
        const transformarAlbums = JSON.parse(trazerAlbums)
        setAlbums(transformarAlbums)
      }
      
    }
  }, [])

  useEffect(() => {
    if (cartData.length > 0 || albums.length > 0) {

      const transformaStringCartdata = JSON.stringify(cartData)
      localStorage.setItem("cartData", transformaStringCartdata)

      const transformaStringAlbums = JSON.stringify(albums)
      localStorage.setItem("albums", transformaStringAlbums)
    }
  }, [cartData, albums])

  return (
    <ChakraProvider>
      <GlobalStyle />
      <Router
        cartData={cartData}
        setCartData={setCartData}
        albums={albums}
        setAlbums={setAlbums}
        total={total}
      />
    </ChakraProvider>
  );
}

export default App;

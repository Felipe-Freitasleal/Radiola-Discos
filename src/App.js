import { Router } from "./Routes/Router";
import { ChakraProvider } from "@chakra-ui/react"
import { GlobalStyle } from "./GlobalStyled";
import { useEffect, useState } from "react";

function App() {

  const [cartData, setCartData] = useState([])
  const [albums, setAlbums] = useState([])
  const [name, setName] = useState("")

  const total = cartData.reduce((acumulador, album) => Number(album.value) + acumulador, 0)

  useEffect(() => {
    if (cartData.length > 0 || albums.length > 0 || name) {

      const transformaStringCartdata = JSON.stringify(cartData)
      localStorage.setItem("cartData", transformaStringCartdata)

      const transformaStringAlbums = JSON.stringify(albums)
      localStorage.setItem("albums", transformaStringAlbums)

      localStorage.setItem("name", name)
    }
  }, [cartData, albums, name])

  useEffect(() => {
    if (localStorage.length > 0) {
      const trazerCart = localStorage.getItem("cartData")
      if(trazerCart){
        const transformarCartData = JSON.parse(trazerCart)
        setCartData(transformarCartData)
      }

      const trazerAlbums = localStorage.getItem("albums")
      if(trazerAlbums){
        const transformarAlbums = JSON.parse(trazerAlbums)
        setAlbums(transformarAlbums)
      }
      
      const trazerNome = localStorage.getItem("name")
      if(trazerNome){
        setName(trazerNome)
      }
    }
  }, [])

  return (
    <ChakraProvider>
      <GlobalStyle />
      <Router
        cartData={cartData}
        setCartData={setCartData}
        albums={albums}
        setAlbums={setAlbums}
        total={total}
        name={name}
        setName={setName}
      />
    </ChakraProvider>
  );
}

export default App;

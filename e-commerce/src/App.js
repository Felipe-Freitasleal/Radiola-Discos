import {Router} from "./Router/Router"
import { ChakraProvider } from "@chakra-ui/react"
import { GlobalStyle } from "./GlobalStyled";
import { useState } from "react";

function App() {

  const [ cartData, setCartData ] = useState([])
  const [ albums, setAlbums ] = useState([])

  return (
    <ChakraProvider>
      <GlobalStyle/>
      <Router 
      cartData={cartData}
      setCartData={setCartData}
      albums={albums}
      setAlbums={setAlbums}
      />
    </ChakraProvider>
  );
}

export default App;

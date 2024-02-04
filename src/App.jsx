import { Router } from "./Routes/Router";
import { useState } from "react";
import { GlobalContext } from "./Contexts/GlobalContext";

function App() {
  const [cartData, setCartData] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [name, setName] = useState("");

  const total = cartData.reduce(
    (acumulador, album) => acumulador + album.preco * album.quantidade,
    0
  );

  const context = {
    cartData,
    setCartData,
    albums,
    setAlbums,
    name,
    setName,
    total,
  };

  return (
    <GlobalContext.Provider value={context}>
      <Router
        cartData={cartData}
        setCartData={setCartData}
        albums={albums}
        setAlbums={setAlbums}
        total={total}
        name={name}
        setName={setName}
      />
    </GlobalContext.Provider>
  );
}

export default App;

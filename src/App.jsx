import { Router } from "./Routes/Router";
import { useState } from "react";
import { GlobalContext } from "./contexts/GlobalContext";

function App() {
  const [cartData, setCartData] = useState([]);
  const [albuns, setAlbuns] = useState([]);
  const [name, setName] = useState("");

  const total = cartData.reduce(
    (acumulador, album) => acumulador + album.preco * album.quantidade,
    0
  );

  const context = {
    cartData,
    setCartData,
    albuns,
    setAlbuns,
    name,
    setName,
    total,
  };

  return (
    <GlobalContext.Provider value={context}>
      <Router
        cartData={cartData}
        setCartData={setCartData}
        albuns={albuns}
        setAlbuns={setAlbuns}
        total={total}
        name={name}
        setName={setName}
      />
    </GlobalContext.Provider>
  );
}

export default App;

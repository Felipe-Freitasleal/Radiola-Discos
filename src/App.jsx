import { Router } from "./Routes/Router";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cartData, setCartData] = useState([]);
  const [albuns, setAlbuns] = useState([]);
  const [name, setName] = useState("");

  const total = cartData.reduce(
    (acumulador, album) => Number(album.value) + acumulador,
    0
  );

  // useEffect(() => {
  //   if (cartData.length > 0 || albuns.length > 0 || name) {

  //     const transformaStringCartdata = JSON.stringify(cartData)
  //     localStorage.setItem("cartData", transformaStringCartdata)

  //     const transformaStringAlbuns = JSON.stringify(albuns)
  //     localStorage.setItem("albuns", transformaStringAlbuns)

  //     localStorage.setItem("name", name)
  //   }
  // }, [cartData, albuns, name])

  // useEffect(() => {
  //   if (localStorage.length > 0) {
  //     const trazerCart = localStorage.getItem("cartData")
  //     if(trazerCart){
  //       const transformarCartData = JSON.parse(trazerCart)
  //       setCartData(transformarCartData)
  //     }

  //     const trazerAlbuns = localStorage.getItem("albuns")
  //     if(trazerAlbuns){
  //       const transformarAlbuns = JSON.parse(trazerAlbuns)
  //       setAlbuns(transformarAlbuns)
  //     }

  //     const trazerNome = localStorage.getItem("name")
  //     if(trazerNome){
  //       setName(trazerNome)
  //     }
  //   }
  // }, [])

  useEffect(() => {
    getAlbuns();
  }, []);

  const getAlbuns = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/album`);
      if (response.status !== 200) throw new Error(response.message);
      console.log('response: ', response)
      setAlbuns(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <Router
        cartData={cartData}
        setCartData={setCartData}
        albuns={albuns}
        setAlbuns={setAlbuns}
        total={total}
        name={name}
        setName={setName}
      />
  );
}

export default App;

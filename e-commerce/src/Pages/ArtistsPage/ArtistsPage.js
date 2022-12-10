import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Disco from "../../Components/Disco/Disco"

const ArtistsPage = (props) => {

  const { cartData, setCartData, albums} = props

  console.log(cartData)
  return (
    <div>
      <Header cartData={cartData}/>
      {albums.map((album)=>{
        return (
          <Disco
            key={album.id}
            cartData={cartData}
            setCartData={setCartData}
            album={album}
          />
        )
      })}
      <Footer />
    </div>
  )
}
export default ArtistsPage
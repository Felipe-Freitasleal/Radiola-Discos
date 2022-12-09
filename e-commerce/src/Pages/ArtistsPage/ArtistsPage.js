import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Disco from "../../Components/Disco/Disco"

const ArtistsPage = (props) => {

  const {setCartData, albums} = props

  console.log(albums)
  return (
    <div>
      <Header />
      {albums.map((album)=>{
        return (
          <Disco
            key={album.albums.idAlbum}
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
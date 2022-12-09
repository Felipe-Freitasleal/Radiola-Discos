import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Artist from "../../Components/Artist/Artist"
import Nav from "../../Components/Nav/Nav"
import ArtistsList from "../../JSON-ArtistsList/ArtistsList.json"
import { Box } from "@chakra-ui/react"


function HomePage(props) {

 console.log(ArtistsList)
    return (
        <div>
            <Header />
            <Nav />
            <Box
            display={'flex'}
            flexDir={'row'}
            justifyContent={'space-evenly'}
            flexWrap={'wrap'}
            >
            {ArtistsList.map((artista) => {
                return (
                    <Artist key={artista.id} artista={artista} setAlbums={props.setAlbums}/>
                )
            }
            )}
            </Box>
            <Footer />
        </div>
    )
}

export default HomePage
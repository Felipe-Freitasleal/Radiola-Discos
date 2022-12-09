import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../Pages/HomePage/HomePage"
import ArtistsPage from "../Pages/ArtistsPage/ArtistsPage"
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"
import { Cart } from "../Pages/Cart/Cart"

export const Router = (props) => {


    return (
        <BrowserRouter>
            <Routes>
                <Route 
                path="/" 
                element={<HomePage 
                    setAlbums={props.setAlbums}
                />} />
                <Route
                    path="/artista"
                    element={<ArtistsPage
                        setCartData={props.setCartData}
                        albums={props.albums}
                    />} />
                <Route
                    path="/carrinho"
                    element={<Cart
                        cartData={props.cartData}
                    />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}


import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../Pages/HomePage/HomePage"
import ArtistsPage from "../Pages/ArtistsPage/ArtistsPage"
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"
import { CartPage } from "../Pages/CartPage/CartPage"

export const Router = (props) => {

    const {
        cartData,
        setCartData,
        albums,
        setAlbums,
        total,
        name,
        setName
    } = props

    return (
        <BrowserRouter>
            <Routes>
                <Route 
                path="/" 
                element={<HomePage 
                    cartData={cartData}
                    setAlbums={setAlbums}
                    name={name}
                    setName={setName}
                />} />
                <Route
                    path="/artista"
                    element={<ArtistsPage
                        cartData={cartData}
                        setCartData={setCartData}
                        albums={albums}
                    />} />
                <Route
                    path="/carrinho"
                    element={<CartPage
                        cartData={cartData}
                        setCartData={setCartData}
                        total={total}
                    />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}


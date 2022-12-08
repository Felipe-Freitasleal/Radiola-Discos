import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "../Pages/Cart/Cart"
import HomePage from "../Pages/HomePage/HomePage"
import ArtistsPage from "../Pages/ArtistsPage/ArtistsPage"
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"

export const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/artista" element={<ArtistsPage/>}/>
                <Route path="/carrinho" element={<Cart/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}


import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "../Pages/Cart/Cart"
import HomePage from "../Pages/HomePage/HomePage"


export const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/Cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}


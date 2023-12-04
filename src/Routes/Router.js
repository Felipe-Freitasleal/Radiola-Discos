import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import { CartPage } from "../Pages/CartPage/CartPage";

export const Router = (props) => {
  const { cartData, setCartData, setAlbuns, total, name, setName, albuns } =
    props;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              cartData={cartData}
              setAlbuns={setAlbuns}
              albuns={albuns}
              name={name}
              setName={setName}
              setCartData={setCartData}
            />
          }
        />
        <Route
          path="/carrinho"
          element={
            <CartPage
              cartData={cartData}
              setCartData={setCartData}
              total={total}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

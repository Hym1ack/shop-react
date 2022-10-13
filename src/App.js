import { Route, Routes } from "react-router-dom";
import ShopProducts from "./pages/ShopProducts/ShopProducts";
import Layout from "./pages/Layout/Layout";
import CartPage from "./pages/Cart/CartPage";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/Product/ProductPage";
import Products from "./components/Product/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<ShopProducts />}>
          <Route path=":category" element={<Products />} />
        </Route>
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

// Todo сделать пагинацию товаров
// Todo сделать блок что можно добавить

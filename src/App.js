import { Route, Routes } from "react-router-dom";
import ShopProducts from "./pages/ShopProducts/ShopProducts";
import Layout from "./pages/Layout/Layout";
import ProductContainer from "./components/Product/ProductContainer";
import { linksCatalog } from "./database/linksCatalog";

function App() {
  const routesProducts = linksCatalog.map((obj) =>
    obj.items.map((link) => (
      <Route path={link.to} element={<ProductContainer />} />
    ))
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="shop" element={<ShopProducts />}>
          {routesProducts}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

// Todo сделать пагинацию товаров
// Todo сделать блок с рекомендациями
// Todo сделать блок что можно добавить

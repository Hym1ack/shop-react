import { Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import ShopProducts from "./pages/ShopProducts/ShopProducts";
import Layout from "./pages/Layout/Layout";
import CartPage from "./pages/Cart/CartPage";
import NotFound from "./pages/NotFound/NotFound";
import ProductPage from "./pages/Product/ProductPage";
import Products from "./components/Product/Products";
import { auth } from "./firebase";
import { login } from "./redux/userSlice";
import { RequireAuth } from "./hoc/RequireAuth";
import ProfilePage from "./pages/Profile/ProfilePage";
import ProfileSettings from "./components/Profile/ProfileSettings/ProfileSettings";
import ProfileHistory from "./components/Profile/ProfileHistory/ProfileHistory";
import ProfileFavourite from "./components/Profile/ProfileFavourite/ProfileFavourite";

function App() {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser === null) return null;

    const { displayName, email, uid, phoneNumber } = currentUser;

    return dispatch(
      login({
        displayName,
        email,
        uid,
        phoneNumber,
      })
    );
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="shop" element={<ShopProducts />}>
          <Route path=":category" element={<Products />} />
        </Route>
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route
          path="profile/*"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        >
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="history" element={<ProfileHistory />} />
          <Route path="favourites" element={<ProfileFavourite />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

// Todo сделать пагинацию товаров
// Todo сделать блок что можно добавить

//    <Route index element={<Home />} />

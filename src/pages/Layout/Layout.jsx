import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { fetchRecommendedProducts } from "../../redux/shopSlice";

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecommendedProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;

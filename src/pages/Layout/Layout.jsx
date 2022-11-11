import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Container from "../../components/UiKit/Container";
import s from "./Layout.module.css";

function Layout() {
  return (
    <div className={s.app}>
      <Header />
      <Container className={s.main}>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;

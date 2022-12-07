import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Header from "./Header";
import Footer from "./Footer";
import Container from "../../components/UiKit/Container";
import s from "./Layout.module.css";
import StickyMenu from "../../components/StickyMenu/StickyMenu";

function Layout() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={s.app}>
      <Header />
      <Container className={s.main}>
        <Outlet />
      </Container>
      {isMobile && <StickyMenu />}
      <Footer />
    </div>
  );
}

export default Layout;

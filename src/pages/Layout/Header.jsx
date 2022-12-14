import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import s from "./Header.module.css";
import { ReactComponent as AppLogo } from "../../assets/images/header/logo.svg";
import Navigation from "../../components/Navigation/Navigation";
import ProfileButton from "../../components/ProfileButton/ProfileButton";
import AppLink from "../../components/UiKit/AppLink";
import { ReactComponent as FavouriteLogo } from "../../assets/images/header/favourites.svg";
import Search from "../../components/Search/Search";
import Cart from "../../components/Cart/Cart";
import Container from "../../components/UiKit/Container";
import { ReactComponent as UserIcon } from "../../assets/images/header/userIcon.svg";

function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header className={s.header}>
      <Container className={s.container}>
        <div className={s.headerTop}>
          <Link to="/">
            <AppLogo className={s.logo} />
          </Link>
          <Search />
          {!isMobile && (
            <div className={s.headerRight}>
              <AppLink to="profile/favourites">
                <FavouriteLogo className={s.btnImg} />
              </AppLink>
              <ProfileButton>
                <AppLink to="profile">
                  <UserIcon className={s.btnImg} />
                </AppLink>
              </ProfileButton>
              <Cart />
            </div>
          )}
        </div>
        <Navigation />
      </Container>
    </header>
  );
}

export default Header;

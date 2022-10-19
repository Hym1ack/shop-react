import { useMediaQuery } from "react-responsive";
import s from "./Search.module.css";
import { ReactComponent as SearchImage } from "../../assets/images/header/searchWhite.svg";

function Search() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <fieldset className={s.searchBlock}>
      {!isMobile && (
        <>
          <input className={s.search} placeholder="Начать поиск" />
          <span className={s.iconSearch} />
        </>
      )}

      {isMobile && (
        <button type="button" className={s.mobileSearch}>
          <SearchImage />
        </button>
      )}
    </fieldset>
  );
}

export default Search;

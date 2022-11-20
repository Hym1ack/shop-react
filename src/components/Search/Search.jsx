import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import s from "./Search.module.css";
import { ReactComponent as SearchImage } from "../../assets/images/header/searchWhite.svg";
import { ReactComponent as SearchX } from "../../assets/images/x.svg";
import { useDebounce } from "../../hooks/useDebounce";
import {
  clearSearchedProducts,
  fetchProductsByName,
} from "../../redux/shopSlice";
import AppLink from "../UiKit/AppLink";
import BuyButton from "../UiKit/BuyButton";

function Search() {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 500);
  const { searchedProducts } = useSelector((state) => state.shop);
  const [displayProducts, setDisplayProducts] = useState(false);
  const changeValue = (e) => setSearchValue(e.target.value);

  useEffect(() => {
    if (debouncedValue.length === 0) {
      dispatch(clearSearchedProducts());
    }

    if (debouncedValue) {
      dispatch(fetchProductsByName(debouncedValue));
    }
  }, [debouncedValue, dispatch]);

  const searchedElements = searchedProducts.map((product) => (
    <div className={s.product}>
      <AppLink to={`product/${product.id}`}>
        <img className={s.productImage} src={product.image} alt="product" />
      </AppLink>
      <AppLink to={`product/${product.id}`}>
        <p className={s.productName}>{product.productName}</p>
      </AppLink>
      <BuyButton product={product} />
    </div>
  ));

  return (
    <fieldset className={s.searchBlock}>
      {!isMobile && (
        <>
          <input
            className={s.search}
            placeholder="Начать поиск"
            onChange={changeValue}
            value={searchValue}
            onFocus={() => setDisplayProducts(true)}
            onBlur={() => setDisplayProducts(false)}
          />

          {searchValue.trim().length !== 0 ? (
            <button
              className={s.searchClean}
              type="button"
              onClick={() => setSearchValue("")}
            >
              <SearchX />
            </button>
          ) : (
            <span className={s.iconSearch} />
          )}
        </>
      )}
      {isMobile && (
        <button type="button" className={s.mobileSearch}>
          <SearchImage />
        </button>
      )}
      <CSSTransition
        in={displayProducts}
        timeout={300}
        classNames={{
          enterActive: s.productsActive,
          exitActive: s.productsExit,
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className={s.searched}>{searchedElements}</div>
      </CSSTransition>
    </fieldset>
  );
}

export default Search;

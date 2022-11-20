import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import s from "./Sort.module.css";
import { setSort } from "../../redux/shopSlice";
import { ReactComponent as ArrowIcon } from "../../assets/images/shop/arrow.svg";

const options = [
  { value: "rating", label: "По популярности" },
  { value: "priceUp", label: "По цене, по возрастанию" },
  { value: "priceDown", label: "По цене, по убыванию" },
  { value: "alphabetUp", label: "По алфавиту, по возрастанию" },
  { value: "alphabetDown", label: "По алфавиту, по убыванию" },
];

function Sort() {
  const dispatch = useDispatch();
  const sortLabel = useSelector((state) => state.shop.sort.label);
  const [isOpen, setOpen] = useState(false);
  const refSort = useRef();

  const toggleListVisible = () => setOpen(!isOpen);

  const onClickItem = (objOptions) => {
    dispatch(setSort(objOptions));
    setOpen(false);
  };

  useEffect(() => {
    const clickOut = (e) => {
      if (!e.path.includes(refSort.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", clickOut);

    return () => document.body.removeEventListener("click", clickOut);
  }, []);

  return (
    <div ref={refSort} className={s.sort}>
      <button
        onClick={toggleListVisible}
        type="button"
        className={s.sortActive}
      >
        {sortLabel}
        <ArrowIcon
          className={`${s.sortImage} ${isOpen && s.sortImageActive}`}
        />
      </button>

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames={{
          enterActive: s.sortEnter,
          exitActive: s.sortExit,
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className={s.sortItems}>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={s.sortItem}
              onClick={() => onClickItem(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
}

export default Sort;

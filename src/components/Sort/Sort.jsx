import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Sort.module.css";
import { setSort } from "../../redux/sortSlice";

const options = [
  { value: "rating", label: "По популярности" },
  { value: "priceUp", label: "По цене, по возрастанию" },
  { value: "priceDown", label: "По цене, по убыванию" },
  { value: "alphabetUp", label: "По алфавиту, по возрастанию" },
  { value: "alphabetDown", label: "По алфавиту, по убыванию" },
];

function Sort() {
  const dispatch = useDispatch();
  const sortLabel = useSelector((state) => state.sort.sort.label);
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
        <svg
          className={s.sortActiveImg}
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.69335 0.289794L6.67087 5.26732C7.05714 5.65559 7.05714 6.28273 6.67087 6.671L1.69335 11.6485C1.32104 11.9681 0.770515 11.9681 0.39821 11.6485C-0.0189271 11.2911 -0.0676747 10.662 0.289721 10.2449L4.56039 5.97413L0.28967 1.69347C-0.0965921 1.3052 -0.0965921 0.678064 0.28967 0.289794C0.67794 -0.0964679 1.30513 -0.0964679 1.69335 0.289794Z"
            fill="black"
          />
        </svg>
      </button>
      {isOpen && (
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
      )}
    </div>
  );
}

export default Sort;

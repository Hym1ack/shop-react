import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import s from "./Pagination.module.css";

function Pagination({ products, setCurrentItems }) {
  const itemsPerPage = 9;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products, setCurrentItems]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <ReactPaginate
      previousLabel="Назад"
      breakLabel="..."
      nextLabel="Дальше"
      className={s.pagination}
      containerClassName={s.paginationContainer}
      onPageChange={handlePageClick}
      pageRangeDisplayed={itemsPerPage}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;

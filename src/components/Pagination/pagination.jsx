import React from "react";
import s from "../Pagination/pagination.module.css";

export default function Pagination({
  productsXPage,
  pagination,
  plants,
  currentPage,
  notShow,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(plants / productsXPage); i++) {
    pages.push(i);
  }

  return (
    <div className={s.pagination}>
      {!notShow &&
        pages &&
        pages.map((number) => (
          <button
            key={number}
            onClick={() => pagination(number)}
            className={number === currentPage ? s.actived : ""}
          >
            {number}
          </button>
        ))}
    </div>
  );
}

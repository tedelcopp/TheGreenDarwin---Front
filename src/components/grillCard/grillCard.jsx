import { React, useState, useEffect } from "react";
import Loading from "../PrivateRoutes/Loading";
import ProductCard from "../ProductCard/ProductCard";
import s from "./grillCard.module.css";
import Pagination from "../Pagination/pagination";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/actions/actionIndex";
import Footer from "../Footer/Footer";


export default function GrillCard() {
  const plants = useSelector((state) => state.filterProducts);
  const orderedChange = useSelector((state) => state.orderedChange);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsXPage] = useState(9);

  const iLastProduct = currentPage * productsXPage;
  const iFirstProduct = iLastProduct - productsXPage;
  const currentProducts = plants.slice(iFirstProduct, iLastProduct);
  const currentPages = plants.length / productsXPage;

  useEffect(() => {
    !plants.length && dispatch(getProducts());
    setCurrentPage(1);
  }, [dispatch, orderedChange, plants.length]);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPages > currentPage) setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className={s.shopContainer}>
      <div className={s.util}>
        <div className={s.pag}>
          <button onClick={previousPage} className={s.prevNext}>
            Previous
          </button>
          <Pagination
            productsXPage={productsXPage}
            plants={plants.length}
            pagination={pagination}
            currentPage={currentPage}
          />
          <button onClick={nextPage} className={s.prevNext}>
            Next
          </button>
        </div>
      </div>

      {!currentProducts.length ? (
        <div className={s.cardsGrid}>
          <Loading />
        </div>
      ) : (
        <div className={s.cardsGrid}>
          {currentProducts.map(
            (e) => (
              <Link
                s={{ textDecoration: "none", color: "black" }}
                to={`/products/${e.id}`}
                key={e.id}>
                <ProductCard
                  key={e.id}
                  id={e.id}
                  img={e.img}
                  name={e.name}
                  price={e.price}
                />
              </Link>
            )
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

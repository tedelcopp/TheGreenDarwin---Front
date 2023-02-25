import style from "./CategoriesFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  filterByCategory,
  getCategories,
} from "../../../src/redux/actions/actionIndex";

const CategoriesFilter = () => {
  const allCategories = useSelector((state) => state.allCategories);
  //const categoriesChange = useSelector((state) => state.categoriesChange);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch /*, categoriesChange*/]);

  const handleFilteredProduct = (event) => {
    dispatch(filterByCategory(event.target.value));
    //dispatch(setCurrent(1));
    //dispatch(setPage(1));
  };

  const categoriesList = allCategories.map((category, id) => {
    return (
      <option key={id} value={category}>
        {category}
      </option>
    );
  });

  return (
    <>
      <div className={style.filtercontainer}>
        <select
          className={style.select}
          onChange={(event) => handleFilteredProduct(event)}>
          <option value={"Todas"}>Categories</option>
          {categoriesList}
        </select>
      </div>
    </>
  );
};

export default CategoriesFilter;

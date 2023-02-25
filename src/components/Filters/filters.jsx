import { useDispatch } from "react-redux";
import {
  filterByName,
  filterByPrice,
  filterByWeight,
  filterByRating,
  getProducts
} from "../../redux/actions/actionIndex.js";

// --Importo styles-- //
import style from "./filters.module.css";
import reloader from './img/reload.png'

export default function Filters() {
  const dispatch = useDispatch();

  // --Handels-- //

  function handleClick(e) {
    e.preventDefault();
    dispatch(getProducts());
  }


  function handleFilterByName(e) {
    e.preventDefault();
    dispatch(filterByName(e.target.value));
  }
  function handleFilterByPrice(e) {
    e.preventDefault();
    dispatch(filterByPrice(e.target.value));
  }
  function handleFilterByWeight(e) {
    e.preventDefault();
    dispatch(filterByWeight(e.target.value));
  }
  function handleFilterByRating(e) {
    e.preventDefault();
    dispatch(filterByRating(e.target.value));
  }

  return (
    <div className={style.content}>
      <div className={style.filterContainer}>
        <h2>Filters</h2>

        {/* -- BY NAME-- */}
        <select
          className={style.filters}
          onChange={(e) => handleFilterByName(e)}>
          <option hidden>By Name</option>
          <option value="A-Z">By A-Z</option>
          <option value="Z-A">By Z-A</option>
        </select>

        {/* --BY PRICE-- */}
        <select
          className={style.filters}
          onChange={(e) => handleFilterByPrice(e)}>
          <option hidden>By Price</option>
          <option value="maxPrice">Max-Min</option>
          <option value="minPrice">Min-Max</option>
        </select>

        {/* --BY WEIGHT*/}
        <select
          className={style.filters}
          onChange={(e) => handleFilterByWeight(e)} >
          <option hidden>By Weight</option>
          <option value="maxWeight">Max-Min</option>
          <option value="minWeight">Min-Max</option>
        </select>

        {/* -- BY RATING-- */}
        <select
          className={style.filters}
          onChange={(e) => handleFilterByRating(e)}>
          <option hidden>By Rating</option>
          <option value="maxRating">Higher to lower</option>
          <option value="minRating">Lower to higher</option>
        </select>
        <button
          className={style.refreshButton}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          <img className={style.reloader} src={reloader} alt="reload_BTN" />
        </button>
      </div>
    </div>
  );
}

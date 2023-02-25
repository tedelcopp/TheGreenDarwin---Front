import Searchbar from "../SearchBar/SearchBar";
import Navbar from "../NavBar/NavBar";
import CategoriesFilter from "../CategoriesFilter/CategoriesFilter";
import Filters from "../Filters/filters";
import GrillCard from "../grillCard/grillCard";
import style from "./Shop.module.css";
const Shop = () => {
  return (
    <>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.searchbar}>
        <Searchbar />
      </div>
      <div className={style.body}>
        <div className={style.topbar}>
          <CategoriesFilter />
          <Filters />
        </div>
        <div className={style.grid}>
          <GrillCard />
        </div>
      </div>
    </>
  );
};

export default Shop;

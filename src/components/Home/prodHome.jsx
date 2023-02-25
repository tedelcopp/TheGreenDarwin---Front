import { React } from "react";
import { Link } from "react-router-dom";
import s from "../Home/prodHome.module.css";

export default function ProdHome(props) {
  const style = props.s;
  return (
    <div className={s.container}>
      <div className={s.card}>
        <div className={style === "0" ? s.cardheader1 : s.cardheader2}></div>
        <div className={s.cardbody}>
          <h3>{props.name}</h3>
          <Link to={`/products/${props.id}`}>
            <div className={s.button}>
              <h4>Read More</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

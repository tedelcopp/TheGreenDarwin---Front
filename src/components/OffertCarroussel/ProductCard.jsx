import s from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import React from "react";

const ProductCard = (product) => {

    return (
        <Link to={`/products/${product.id}`} key={product.id}>
            <div className={s.prodCont}>
                <div className={s.header}>
                    <img src={product.img} />
                    <div className={s.cardBody}>
                        <h3>
                            {product.name}
                        </h3>
                        <h4>
                            ${product.price}.00
                        </h4>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default ProductCard;

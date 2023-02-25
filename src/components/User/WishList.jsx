import { React, useState, useEffect } from "react";
import s from './UserComponent.module.css';
import { useSelector, useDispatch } from "react-redux";
import { getFavorites } from "../../redux/actions/actionIndex";
import { useLocalStorage } from "./../productDetails/useLocalStorage";
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom";
import {  deleteFavorites } from '../../redux/actions/actionIndex'
import { toast } from "react-toastify"; 

export default function WishList(product) {
    const { user } = useAuth0()
    const productsWishlist = useSelector((state) => state.wishlistProducts);
    const [quantity] = useState(1);
    const [,setCart] = useLocalStorage("cart")
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getFavorites(user.email));
    }, [dispatch, user.email, productsWishlist]);



    const handleRemove = (id) => {
        if (user.email) {
            const payload = { productId: id, email: user.email }
            dispatch(deleteFavorites(payload))
            toast.info("Product removed from your wishlist")
        }
    }


    return (
        <>
            <div className={s.WishContainer}>
                <div className={s.WishCard}>
                    <h3>  My Wishlist </h3>
                    <div className={s.listCont}>
                        {productsWishlist.map((e, idx) => (
                            <div className={s.favList} key={idx}>
                                <div className={s.removeFav} onClick={() => handleRemove(e.id)}>X</div>
                                <Link
                                    s={{ textDecoration: "none", color: "black" }}
                                    to={`/products/${e.id}`}
                                    key={e.id}>
                                    <div >
                                        <ul className={s.favItem} key={idx}>
                                            <li >{e.name} </li>
                                            <li className={s.favPrice}>${e.price}.00 </li>
                                        </ul>
                                    </div>
                                </Link>

                                <div className={s.cartFav}>
                                    <span onClick={() => {
                                        const oldCart = JSON.parse(window.localStorage.getItem("cart"))
                                        const toCart = [{
                                            id: e.id,
                                            name: e.name,
                                            price: e.price,
                                            quantity: quantity
                                        }]
                                        if (oldCart === null) {
                                            const toCartStringify = [...toCart]
                                            console.log(toCartStringify)
                                            setCart(toCartStringify)
                                        } else {
                                            const toCartStringify = [...toCart].concat(oldCart)
                                            console.log(toCartStringify)
                                            console.log(JSON.parse(window.localStorage.getItem("cart")))
                                            setCart(toCartStringify)
                                        }
                                        toast.info("Product added to cart!");
                                    }}>
                                        Add to cart
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )

}
import { useLocalStorage } from "./../productDetails/useLocalStorage";
import s from "./cart.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import {
  clearCart,
  deletCartProduct,
  getProducts,
} from "../../redux/actions/actionIndex";
import { useDispatch, useSelector } from "react-redux";
import { React, useState, useEffect } from "react";
import ButtonCheckout from "../ButtonCheckout/ButtonCheckout";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const ShopCart = () => {
  const allProducts = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const [cart, setCart] = useLocalStorage("cart");
  const [product, SetProduct] = useState({});
  const [buyOrder, SetbuyOrder] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  console.log(buyOrder);

  const clearCart = () => {
    SetbuyOrder([]);
    setCart([]);
  };

  if (!buyOrder) clearCart();

  const delFromCart = (id) => {
    console.log(id);
    console.log(buyOrder.length);
    const newCart = buyOrder.filter((el) => el.id !== id);
    console.log(newCart);
    SetbuyOrder(newCart);
    setCart(newCart);
  };

  const lessOne = (id) => {
    let oldCart = JSON.parse(window.localStorage.getItem("cart"));
    for (let i = 0; i < oldCart.length; i++) {
      if (oldCart[i].id === id && oldCart[i].quantity > 1) {
        oldCart[i].quantity--;
      }
      setCart(oldCart);
    }
  };

  const plusOne = (id) => {
    let oldCart = JSON.parse(window.localStorage.getItem("cart"));
    const filtredProduct = allProducts.filter((e) => e.id === id);
    for (let i = 0; i < oldCart.length; i++) {
      if (
        oldCart[i].id === id &&
        filtredProduct[0].stock > oldCart[i].quantity
      ) {
        oldCart[i].quantity++;
      }
      setCart(oldCart);
    }
  };

  const totalPrice = (array) => {
    var sum = 0;
    array.map((e) => {
      sum += e.price * e.quantity;
    });
    return sum;
  };

  var total = totalPrice(cart.map((p) => p));

  useEffect(() => {
    dispatch(getProducts());
    SetProduct({
      price: total,
      description: `Purchase from The Green Darwin at a price of $${product.price} USD`,
    });
  }, [buyOrder]);

  return (
    <>
      <NavBar />
      <div className={s.cartContainer}>
        <div className={s.cardCart}>
          <div className={s.cartHead}>
            <h3>
              <u>Shopping Cart</u>
            </h3>
            <h4 className={s.remove} onClick={clearCart}>
              Remove all
            </h4>
          </div>

          <article className={s.box}>
            {!buyOrder.length ? (
              <h3>There's nothing in your cart</h3>
            ) : (
              cart.map((p, idx) => {
                return (
                  <ul className={s.boxList}>
                    <li key={idx}>
                      <h3>
                        <u>{p.name}</u>
                      </h3>
                      <h4>
                        ${p.price}.00 x {p.quantity} = $
                        {parseInt(p.price * p.quantity)}.00
                      </h4>
                      <RemoveIcon
                        classname={s.addless}
                        onClick={() => lessOne(p.id)}
                      />
                      <button onClick={() => delFromCart(p.id)}>Remove</button>
                      <AddIcon
                        classname={s.addless}
                        onClick={() => plusOne(p.id)}
                      />
                    </li>
                  </ul>
                );
              })
            )}

            <h3>
              • <u>Total:</u> ${total}.00{" "}
            </h3>
            <div className={s.checkoutText}>
              Proceed to Checkout
              <ButtonCheckout buyOrder={buyOrder} product={product} />
            </div>
          </article>
        </div>
      </div>

      <div className={s.footCart}>
        <Footer />
      </div>
    </>
  );
};

export default ShopCart;

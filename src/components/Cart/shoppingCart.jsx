import { useReducer } from "react";

import initialCartState from '../../redux/reducer/reducerCart'
import CartReducer from '../../redux/reducer/reducerCart'

import ItemTest from './itemTest'
import { addToCart } from "../../redux/actions/actionIndex";
import s from './shoppingCart.module.css'

const ShopCart = () => {



    const [state, dispatch] = useReducer(CartReducer, initialCartState)



    const products = [
        { id: 1, name: "Brocoli", price: 18 },
        { id: 2, name: "Cactus", price: 10 }
    ];




    const delFromCart = () => { }
    const clearCart = () => { }


    return (
        <div>
            <h2> Shopping Cart</h2>
            <h3>Items in cart</h3>
            <article className={s.box}>
                {products.map((p) => (<ItemTest key={p.id} data={p} addToCart={addToCart} />))}
            </article>
            <h3>Cart.</h3>
            <article className={s.box}>
                <button onClick={clearCart}>Clean Cart</button>

            </article>
        </div>
    )

}

export default ShopCart
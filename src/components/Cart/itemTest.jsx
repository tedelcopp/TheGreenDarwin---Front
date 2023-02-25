const ItemTest = ({ data, addToCart }) => {

    let { id, name, price } = data

    return <div style={{ border: "solid gray", padding: "1rem" }}>
        <h4>{name}</h4>
        <h5>${price}</h5>
        <button onClick={() => addToCart(id)}>Checkout</button>
    </div>

}

export default ItemTest;
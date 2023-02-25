import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react'
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { postOrder } from "../../redux/actions/actionIndex";
import { useLocalStorage } from "../productDetails/useLocalStorage";
import { useNavigate } from "react-router-dom";

const ButtonCheckout = (props) => {
  const history = useNavigate()
  const [cart, setCart] = useLocalStorage('cart')
  const { isAuthenticated, user } = useAuth0()
  const dispatch = useDispatch()
  const productsend = props.product;
  //console.log("Productsend", productsend);
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderID) => {
    //We need to create and call here the action and reducer for setOrder in the DB :o

    setPaidFor(true); //If the payment was successfull

  };

  if (paidFor) {
    setCart([])
    setPaidFor(false)
    history("/")
    toast.success("Your payment was accepted"); //Evaluate redirect page...
  }

  if (error) {
    toast.warn("You have to be logged in to buy"); //Evaluate redirect page...
    setTimeout(function () {
      setError(null);
    }, 1000);

  }

  const purchaseData = {
    totalAmount: productsend.price,
    email: user?.email,
    products: props.buyOrder.map(i => { return {productId: i.id, quantity: i.quantity}})
  }

  return (
    <PayPalButtons
      //   style={{
      //     color: "green",
      //     layout: "horizontal",
      //     height: 48,
      //     tagline: false,
      //     shape: "pill",
      //   }}
      onClick={async (data, actions) => {
        //We can validate some here
        //  const nosequevalidar = true;

        if (!user.email) {
          console.log(user.email)
          setError("Authentication error")
          return await actions.reject();

        } else {
          postOrder(purchaseData)
          return await actions.resolve();

        }
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: productsend.description,
              amount: {
                value: productsend.price,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order: ", order);
        handleApprove(data.orderID);
      }}
      onError={(error) => {

        setError(error);
        console.log("Paypal Checkout Error: ", error);

      }}
      onCancel={() => {
        console.log("Paypal Checkout was cancelled"); //Evaluate redirect user to car again
      }}
    />
  );
};

export default ButtonCheckout;

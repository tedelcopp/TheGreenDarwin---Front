import { useSelector, useDispatch } from "react-redux";
import style from "./ProductDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Rating from "@mui/material/Rating";
import Card from "react-bootstrap/Card";
import {
  getProduct,
  getReviewById,
  getAllUsers,
  postFavorite /* getClean */,
  postReview,
} from "../../redux/actions/actionIndex.js";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocalStorage } from "./useLocalStorage";
import { toast } from "react-toastify";
import Loading from "../PrivateRoutes/Loading";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const [cart, setCart] = useLocalStorage("cart");
  const { productId } = useParams();
  const allUsers = useSelector((state) => state.allUsers);
  const orderedChange = useSelector((state) => state.orderedChange);
  const reviews = useSelector((state) => state.productReview);
  const orders = useSelector((state) => state.orders);
  const product = useSelector((state) => state.productDetail);
  const [quantity, setQuantity] = useState(1);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);
  const getRating = (rating) => {
    setRating(rating);
  };

  const handleOwner = (id, allUsers) => {
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].id === id) return allUsers[i].fullName;
    }
  };

  const handleQualify = (e) => {
    const payload = {
      email: user.email,
      productId: productId,
      rating: rating,
      text: review,
    };
    if (!rating || !review) {
      toast.warn("Please write your review before submitting!");
      return;
    }
    dispatch(postReview(payload));
    dispatch(getReviewById(productId));
    toast.success("Product review was sent successfully!");
    setRating(0);
    setReview("");
    window.location.reload(true);
  };

  const handleQuantity = (quantity) => {
    if (quantity >= 1 && quantity <= product.stock) setQuantity(quantity);
    if (quantity === product.stock) {
      quantity = product.stock;
      toast.warn("Stock limit");
    }
  };

  useEffect(() => {
    dispatch(getProduct(productId));
    dispatch(getReviewById(productId));
    dispatch(getAllUsers());
    setTimeout(() => {
      setLoading(false);
    }, "1000");
  }, [dispatch, productId, review]);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  console.log(reviews);

  return (
    <>
      <Navbar />
      <div className={style.backButton} onClick={goBack}>
        <h3>Back</h3>
      </div>
      {loading ? (
        <div className={style.detailBody}>
          <Loading />{" "}
        </div>
      ) : (
        <div className={style.detailBody}>
          <div className={style.containerP}>
            <div className={style.imagecontainer}>
              <img
                className={style.image}
                src={product?.img}
                alt={product?.name}
              />
            </div>
            <div className={style.info}>
              <div className={style.titleandwish}>
                <h2 className={style.title}>
                  <></>
                  {product.name}
                </h2>

                <FavoriteIcon
                  className={style.icon}
                  onClick={() => {
                    if (isAuthenticated) {
                      dispatch(
                        postFavorite({
                          email: user.email,
                          productId: product.id,
                        })
                      );

                      toast.info("Product added to your wishlist!");
                    } else {
                      toast.warn(
                        "You must be logged in to add products to your wishlist"
                      );
                      //dispatch action addToWishList
                    }
                  }}
                />
              </div>

              <div className={style.infoblockcontainer}>
                <div className={style.infoblock}>
                  <p className={style.p}>
                    <span className={style.span}>
                      • <u> Code:</u>
                    </span>{" "}
                    {product?.id}
                  </p>
                  <p className={style.p}>
                    <span className={style.span}>
                      • <u> Height:</u>
                    </span>{" "}
                    {product?.height} cm
                  </p>
                  <p className={style.p}>
                    <span className={style.span}>
                      • <u> Weight:</u>
                    </span>{" "}
                    {product?.weight} gr
                  </p>
                  <p className={style.p}>
                    <span className={style.span}>
                      • <u>Quantity Available:</u>
                    </span>{" "}
                    {product?.stock}
                  </p>
                  <p className={style.price}>
                    <span className={style.span}>
                      • <u>Price:</u> $ {product?.price}
                    </span>
                  </p>
                  <button
                    onClick={() => handleQuantity(quantity - 1)}
                    className={style.minusBtn}
                  >
                    -
                  </button>
                  <input className={style.input} value={quantity}></input>
                  <button
                    onClick={() => handleQuantity(quantity + 1)}
                    className={style.plusBtn}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  let oldCart = JSON.parse(window.localStorage.getItem("cart"));
                  const toCart = [
                    {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      quantity: quantity,
                    },
                  ];
                  const verify =
                    oldCart !== null
                      ? oldCart.filter((e) => e.id === toCart[0].id)
                      : [];
                  if (oldCart === null) {
                    const toCartStringify = [...toCart];
                    //console.log(toCartStringify);
                    setCart(toCartStringify);
                  } else if (verify.length > 0) {
                    for (let i = 0; i < oldCart.length; i++) {
                      if (oldCart[i].id === toCart[0].id) {
                        oldCart[i].quantity++;
                      }
                      setCart(oldCart);
                    }
                  } else {
                    const toCartStringify = [...toCart].concat(oldCart);
                    setCart(toCartStringify);
                  }
                  toast.info("Product added to cart!");
                }}
                className={style.myBtn}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className={style.containercategories}>
            <p className={style.p}>
              <span className={style.descriptiontitle}>
                • <u>Categories:</u>
              </span>
            </p>
            <p className={style.p}>
              {product.category?.map(
                (c) => ` ${c.charAt(0).toUpperCase() + c.slice(1)} `
              )}
            </p>
          </div>
          <div className={style.containerdescription}>
            <p className={style.p}>
              <span className={style.descriptiontitle}>
                {" "}
                • <u>Description:</u>
              </span>
            </p>
            <p className={style.p}>{product?.description}</p>
          </div>

          {/* {orders?.length && productAlreadyBought() ? ( */}
          <div className={style.containerreview}>
            <div className={style.rating}>
              <span className={style.descriptiontitle}>
                •<u> Review:</u>
              </span>
              <Rating
                name="RateReview"
                value={rating}
                onChange={(event, newValue) => {
                  getRating(newValue);
                }}
              />
              <p>Your review is {rating} stars</p>
            </div>

            <textarea
              // onChange={(e) => setReview(e.target.value)}
              onChange={(e) => setReview(e.target.value)}
              value={review}
              className={style.textarea}
              placeholder="Rate this product!"
              type="textarea"
              rows={5}
              cols={5}
              maxLength="100"
            ></textarea>

            <button
              onClick={(e) => {
                if (!user) {
                  toast.info("You must be logged in to rate this product");
                } else {
                  handleQualify(e);
                }
              }}
              className={style.myBtnCalificar}
            >
              Qualify
            </button>
          </div>

          {reviews?.map((e) => (
            <Card key={e.id} className={style.cardContainer}>
              <Card.Header className={style.coomentHead}>
                <span>{handleOwner(e.userId, allUsers)}</span>{" "}
                <span>
                  <Rating name="read-only" value={e.rating} readOnly />
                </span>
              </Card.Header>
              <Card.Body className={style.comments}>
                <Card.Text>{e.text}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductDetails;

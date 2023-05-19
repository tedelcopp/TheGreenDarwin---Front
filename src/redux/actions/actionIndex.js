import axios from "axios";
import { toast } from "react-toastify";

export const GET_USER_REVIEWS = "GET_USER_REVIEWS";
export const GET_REVIEW_BY_ID = "GET_REVIEW_BY_ID";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT = "GET_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_WEIGHT = "FILTER_BY_WEIGHT";
export const GET_CLEAN = "GET_CLEAN";
export const ADD_CART = "ADD_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const GET_FAVORITES = "GET_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const GET_BLOGS = "GET_BLOGS";
export const GET_BLOG_BY_ID = "GET_BLOG_BY_ID";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const POST_ORDER = "POST_ORDER";
export const GET_ORDERS = "GET_ORDERS";
export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const FILTER_BY_RATING = "FILTER_BY_RATING";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const PUT_PRODUCT_STATE = "PUT_PRODUCT_STATE";

export const getState = () => {
  return function (dispatch) {
    dispatch({ type: GET_PRODUCTS });
  };
};

export const getProducts = () => {
  return async function (dispatch) {
    const productsResponse = await axios.get("http://localhost:3000/products");
    dispatch({ type: GET_PRODUCTS, payload: productsResponse.data });
  };
};

export const getCategories = () => {
  return async function (dispatch) {
    const categoriesResponse = await axios.get("/categories");
    dispatch({ type: GET_CATEGORIES, payload: categoriesResponse.data });
  };
};

export const getProduct = (productId) => {
  return async function (dispatch) {
    const productResponse = await axios.get(`/products/${productId}`);
    dispatch({ type: GET_PRODUCT, payload: productResponse.data });
  };
};

export const searchProduct = (searchTerm) => {
  return async function (dispatch) {
    try {
      const searchResponse = await axios.get(`/products/?name=${searchTerm}`);
      dispatch({ type: SEARCH_PRODUCT, payload: searchResponse.data });
    } catch (error) {
      console.error(error, "Product not found...");
      toast.warn("Product not found, try another name");
    }
  };
};

export const createProduct = (product) => {
  return async function (dispatch) {
    try {
      const accessToken = localStorage.getItem("token");
      const response = await axios.post("/products", product, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Algorithm: "RS256", // tal vez haya que borrar o cambiar esto
        },
      });

      if (response.status === 201) {
        dispatch({
          type: CREATE_PRODUCT,
          payload: response,
        });

        toast.success("Product created successfully");
      } else if (response.status === 400) {
        console.error("Error creating new product");
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: CREATE_PRODUCT, payload: { data: [] } });
      toast.error("Could not create product");
    }
  };
};

export const createCategory = (category) => {
  return async function (dispatch) {
    try {
      const accessToken = localStorage.getItem("token");
      const response = await axios.post("/categories", category, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Algorithm: "RS256",
        },
      });
      dispatch({
        type: CREATE_CATEGORY,
        payload: response,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const filterByName = (productName) => {
  return async function (dispatch) {
    dispatch({
      type: FILTER_BY_NAME,
      payload: productName,
    });
  };
};

export const filterByPrice = (productPrice) => {
  return async function (dispatch) {
    dispatch({
      type: FILTER_BY_PRICE,
      payload: productPrice,
    });
  };
};

export const filterByCategory = (productCategory) => {
  return async function (dispatch) {
    dispatch({
      type: FILTER_BY_CATEGORY,
      payload: productCategory,
    });
  };
};

export const filterByWeight = (productWeight) => {
  return async function (dispatch) {
    dispatch({
      type: FILTER_BY_WEIGHT,
      payload: productWeight,
    });
  };
};

export const filterByRating = (value) => {
  return async function (dispatch) {
    dispatch({
      type: FILTER_BY_RATING,
      payload: value,
    });
  };
};

export function getClean() {
  return {
    type: GET_CLEAN,
    payload: [],
  };
}

////////////////////////***CART ACTIONS***/////////////////////////

export const addToCart = (id) => {
  return async function (dispatch) {
    dispatch({
      type: ADD_CART,
      payload: id,
    });
  };
};

export const deletCartProduct = (id) => {
  return async function (dispatch) {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });
  };
};

export function clearCart(payload) {
  return {
    type: CLEAR_CART,
    payload,
  };
}

export function postUser(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/users", payload);
    } catch (error) {
      console.error(error.message);
    }
  };
}

export function updateUser(payload) {
  return async function () {
    try {
      axios.put("/users", payload).then((data) => {
        console.log(data);
      });
    } catch (error) {
      toast.error("Your profile could not be updated, please try again later");
      console.error(error.message);
    }
  };
}

export function postFavorite(payload) {
  return async function (dispatch) {
    dispatch({
      type: ADD_FAVORITES,
      payload: payload,
    });
    try {
      const response = await axios.post("/favorites", payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function getFavorites(email) {
  return async function (dispatch) {
    const productsResponse = await axios.get(`/favorites/${email}`);
    dispatch({ type: GET_FAVORITES, payload: productsResponse.data });
  };
}

export function deleteFavorites(payload) {
  return async function (dispatch) {
    dispatch({
      type: DELETE_FAVORITES,
      payload: payload,
    });
    try {
      const response = await axios.delete("/favorites", { data: payload });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function postReview(payload) {
  return async function () {
    try {
      const response = await axios.post("/reviews", payload);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
}

export function getBlogs() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/blogs");
      dispatch({
        type: GET_BLOGS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getBlogById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/blogs/${id}`);
      console.log(response);
      dispatch({
        type: GET_BLOG_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getAllUsers = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/users`);
      dispatch({ type: GET_ALL_USERS, payload: response.data });
    } catch (error) {
      return "User not found";
    }
  };
};

export const getReviewById = (payload) => {
  return async function (dispatch) {
    try {
      const respose = await axios.get(`/reviews/?productId=${payload}`);
      dispatch({ type: GET_REVIEW_BY_ID, payload: respose.data });
    } catch (error) {
      return "Review not found";
    }
  };
};

export const getOrders = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/orders`);
      dispatch({ type: GET_ORDERS, payload: response.data });
    } catch (error) {
      return "Order not found";
    }
  };
};

export const getUserReviews = (payload) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/reviews/${payload}`);
      dispatch({ type: GET_USER_REVIEWS, payload: res.data });
    } catch (error) {
      return "Error";
    }
  };
};

export const postOrder = (payload) => {
  return async function () {
    try {
      const resOrder = await axios.post("/orders", payload);
      console.log(resOrder);
    } catch (error) {
      console.log(error);
    }
  };
};

export const putProductState = ({ name, activeProduct }) => {
  return async function (dispatch) {
    try {
      const adminRes = await axios.put("/products", { name, activeProduct });

      dispatch({
        type: PUT_PRODUCT_STATE,
        payload: activeProduct,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editProduct = (product) => {
  return async function (dispatch) {
    try {
      const response = axios.put("/products", product);
      dispatch({ type: CREATE_PRODUCT, payload: response });
    } catch (error) {
      console.log(error);
      toast.error("Could not edit product");
    }
  };
};

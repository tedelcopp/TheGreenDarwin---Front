import {
  GET_REVIEW_BY_ID,
  GET_PRODUCTS,
  GET_PRODUCT,
  SEARCH_PRODUCT,
  CREATE_PRODUCT,
  GET_CATEGORIES,
  FILTER_BY_NAME,
  FILTER_BY_PRICE,
  FILTER_BY_CATEGORY,
  FILTER_BY_WEIGHT,
  GET_CLEAN,
  ADD_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  GET_FAVORITES,
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FILTER_BY_RATING,
  GET_BLOGS,
  GET_BLOG_BY_ID,
  GET_ALL_USERS,
  GET_ORDERS,
  GET_USER_REVIEWS,
  CREATE_CATEGORY, 
  EDIT_PRODUCT,
  PUT_PRODUCT_STATE
} from "../actions/actionIndex.js";

export const initialState = {
  allProducts: [],
  allCategories: [],
  productDetail: [],
  productReview: [],
  allUsers: [],
  userReviews: [],
  filterProducts: [],
  wishlistProducts: [],
  orderedChange: false,
  productStateChage: false,
  buyOrder: [],
  cart: [],
  orders: [],
  allRatedProducts: [],
  blogs: [],
  blog: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // --trae todos los productos-- //
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        filterProducts: action.payload,
        orderedChange: !state.orderedChange,
      };

    // --trae single producto by id --//
    case GET_PRODUCT:
      return {
        ...state,
        productDetail: action.payload,
      };

    // --busca por nombre --//
    case SEARCH_PRODUCT:
      return {
        ...state,
        filterProducts: action.payload,
        orderedChange: !state.orderedChange,
      };

    // --crea un producto-- //
    case CREATE_PRODUCT:
      return {
        ...state, 
        allProducts: [...state.allProducts, action.payload]
      };

    //  --crea una categoria nueva--
    case CREATE_CATEGORY:
      return {
        ...state,
        allCategories: [...state.allCategories, action.payload],
      };
    // --trae las categories-- //
    case GET_CATEGORIES:
      const categoryNames = new Set(action.payload);
      const categories = [...categoryNames];
      return {
        ...state,
        allCategories: categories,
      };

    // --filtrado alfabéticamente A-Z o Z-A-- //
    case FILTER_BY_NAME:
      const productsFilterByName =
        action.payload === "A-Z"
          ? state.filterProducts.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.filterProducts.sort((a, b) => {
              if (a.name < b.name) return 1;
              if (a.name > b.name) return -1;
              return 0;
            });

      return {
        ...state,
        filterProducts: productsFilterByName,
        orderedChange: !state.orderedChange,
      };
      
      // --filtrado por precio de mayor a menor y al revés-- //
      case FILTER_BY_PRICE:
      const productsFilterByPrice =
        action.payload === "minPrice"
          ? state.filterProducts.sort((a, b) => {
              if (a.price > b.price) return 1;
              if (a.price < b.price) return -1;
              return 0;
            })
          : state.filterProducts.sort((a, b) => {
              if (a.price < b.price) return 1;
              if (a.price > b.price) return -1;
              return 0;
            });

      return {
        ...state,
        filterProducts: productsFilterByPrice,
        orderedChange: !state.orderedChange,
      };

    // --filtrado por categoría-- //
    case FILTER_BY_CATEGORY:
      const copyAllProducts = state.allProducts;
      const productsFilterByCategory =
        action.payload === "Todas"
          ? copyAllProducts
          : copyAllProducts.filter((e) => e.category?.includes(action.payload));
      return {
        ...state,
        filterProducts: productsFilterByCategory,
        orderedChange: !state.orderedChange,
      };

    // --filtrado por peso-- //
    case FILTER_BY_WEIGHT:
      const productsFilterByWeight =
        action.payload === "minWeight"
          ? state.filterProducts.sort((a, b) => {
              if (a.weight > b.weight) return 1;
              if (a.weight < b.weight) return -1;
              return 0;
            })
          : state.filterProducts.sort((a, b) => {
              if (a.weight < b.weight) return 1;
              if (a.weight > b.weight) return -1;
              return 0;
            });

      return {
        ...state,
        filterProducts: productsFilterByWeight,
        orderedChange: !state.orderedChange,
      };

    case FILTER_BY_RATING:
      const ratedProducts = state.filterProducts.filter(
        (p) => typeof p.rating === "number"
      );
      console.log(ratedProducts);
      const productsFilterByRating =
        action.payload === "minRating"
          ? ratedProducts.sort((a, b) => {
              if (a.rating > b.rating) return 1;
              if (a.rating < b.rating) return -1;
              return 0;
            })
          : ratedProducts.sort((a, b) => {
              if (a.rating < b.rating) return 1;
              if (a.rating > b.rating) return -1;
              return 0;
            });

      return {
        ...state,
        filterProducts: productsFilterByRating,
        orderedChange: !state.orderedChange,
      };

    // --limpia el state-- //
    case GET_CLEAN: {
      return {
        ...state,
        productDetail: action.payload,
      };
    }

    // --agrega producto al carro-- //
    case ADD_CART: {
      let newItem = state.buyOrder.find((p) => p.id === action.payload);

      let itemInCart = state.cart.find((i) => i.id === newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }

    case REMOVE_FROM_CART: {
      const deletedProductCart = state.cart.filter(
        (p) => p.id !== action.payload
      );

      return {
        ...state,
        cart: deletedProductCart,
      };
    }

    // --quita todo del carro-- //
    case CLEAR_CART: {
      return {
        cart: [],
      };
    }

    case GET_FAVORITES: {
      return {
        ...state,
        wishlistProducts: action.payload,
      };
    }

    case ADD_FAVORITES: {
      return {
        ...state,
        wishlistProducts: [...state.wishlistProducts, action.payload.productId],
      };
    }

    case DELETE_FAVORITES: {
      return {
        ...state,
        wishlistProducts: state.wishlistProducts.filter(
          (fav) => fav.productId !== action.payload.productId
          ),
      };
    }
    case GET_BLOGS: {
      return {
        ...state,
        blogs: action.payload,
      };
    }
    case GET_BLOG_BY_ID: {
      return {
        ...state,
        blog: action.payload,
      };
    }
    case GET_REVIEW_BY_ID: {
      return {
        ...state,
        productReview: action.payload,
      };
    }
    
    case GET_ALL_USERS: {
      return {
        ...state,
        allUsers: action.payload,
        orderedChange: !state.orderedChange,
      };
    }
    
    case GET_ORDERS: {
      return {
        ...state,
        orders: action.payload,
      };
    }
    case PUT_PRODUCT_STATE: {
      return {
        ...state,
        productStateChage: !state.orderedChange,
      };
    }

    case GET_USER_REVIEWS: {
      return {
        ...state,
        userReviews: action.payload,
      };
    }
  
    case EDIT_PRODUCT: 
      return {
        ...state,
      }
    // --case default-- //
    default:
      return {
        ...state,
      };
    }
  }
  

import { createContext, useReducer } from 'react';

const initialState = {
  products: [], // Array of product objects (including title and reviews)
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_REVIEW':
      const updatedProducts = state.products.map((product) => {
        if (product.title === action.payload.title) {
          return { ...product, reviews: action.payload.reviews };
        }
        return product;
      });
      return { ...state, products: updatedProducts };
    default:
      return state;
  }
};

const ReviewContext = createContext(initialState);

const ReviewProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return (
    <ReviewContext.Provider value={value}>
      {children}
    </ReviewContext.Provider>
  ); // Added closing tag for ReviewProvider
};

export { ReviewContext, ReviewProvider };

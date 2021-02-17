import { GET_STOCK } from "../actions";

const initialState = {
  stock: "APL",
};

export const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STOCK:
      return {
        ...state,
        // stock: action.payload,
      };
    default:
      return state;
  }
};

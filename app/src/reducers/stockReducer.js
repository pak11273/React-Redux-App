import { GET_STOCK_FAIL, GET_STOCK_START, GET_STOCK_SUCCESS } from "../actions";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STOCK_START:
      return {
        ...state,
        isLoading: false,
        error: "",
      };
    case GET_STOCK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        data: action.payload,
      };
    case GET_STOCK_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

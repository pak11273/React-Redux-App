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
        isLoading: true,
      };
    case GET_STOCK_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_STOCK_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
};

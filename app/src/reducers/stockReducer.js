import { GET_STOCK, TEST } from "../actions";

const initialState = {
  data: {
    "01. symbol": "IBM",
    "02. open": "119.2700",
    "03. high": "120.5600",
    "04. low": "119.0200",
    "05. price": "119.9700",
    "06. volume": "3964869.00",
    "07. latest trading day": "2021-02-17",
    "08. previous close": "120.0700",
    "09. change": "-0.1000",
    "10. change percent": "-0.0833%",
  },
  isLoading: false,
  error: "",
};

export const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STOCK:
      return {
        ...state,
        // stock: action.payload,
      };
    case TEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};

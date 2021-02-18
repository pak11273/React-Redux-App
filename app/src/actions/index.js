import axios from "axios";
import { data } from "../data";

export const GET_STOCK_START = "GET_STOCK_START";
export const GET_STOCK_SUCCESS = "GET_STOCK_SUCCESS";
export const GET_STOCK_FAIL = "GET_STOCK_FAIL";

export const getStock = () => {
  return (dispatch) => {
    dispatch({
      type: GET_STOCK_START,
    });

    setTimeout(() => {
      if (true) {
        dispatch({
          type: GET_STOCK_SUCCESS,
          payload: data["Global Quote"],
        });
      }
    }, 3000);

    // axios
    //   .get(
    //     `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=${process.env.REACT_APP_API_KEY}`
    //   )
    //   .then((res) => {
    //     if (res.data.Note) {
    //       dispatch({
    //         type: GET_STOCK_FAIL,
    //         // error: res.data.Note,
    //         payload: data.data,
    //       });
    //     } else {
    //       dispatch({
    //         type: GET_STOCK_SUCCESS,
    //         payload: res.data,
    //       });
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };
};

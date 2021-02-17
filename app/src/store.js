import { applyMiddleware, createStore } from "redux";

import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

// import logger from "redux-logger";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("prev state: ", store.getState());
  console.log("action: ", action);
  next(action); //calls the reducer
  console.log("next state: ", store.getState());
  console.groupEnd();
};

export const store = createStore(rootReducer, applyMiddleware(logger, thunk));

import { combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const reducer = combineReducers({
  thunk,
  logger,
});

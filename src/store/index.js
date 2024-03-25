import { createStore, applyMiddleware } from "redux";
import reducer from "./redux/index";
import reduxLogger from "redux-logger";
import { thunk } from "redux-thunk";
import reduxPromise from "redux-promise";

const store = createStore(
  reducer,
  applyMiddleware(reduxLogger, thunk, reduxPromise)
);

export default store;

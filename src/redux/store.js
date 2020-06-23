import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import chartReducer from "./reducer.js";

const store = createStore(chartReducer, applyMiddleware(thunk));

export default store;

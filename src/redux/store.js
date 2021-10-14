import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import toDoReducer from "./reducer";

const middlewares = [logger];

const store = createStore(toDoReducer, applyMiddleware(...middlewares));

export default store;
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { AnyAction } from "redux";
import covidReducer from "./reducer";

export type RootState = ReturnType<typeof covidReducer>;


const store = createStore(
  covidReducer,
  applyMiddleware(thunk)
);

export default store;
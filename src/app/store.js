import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import InitialState from "./initialState";

export function configureStore() {
  const store = createStore(
    reducers,
    InitialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}

export default configureStore();

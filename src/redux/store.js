import { combineReducers, configureStore } from "@reduxjs/toolkit";
import publicDoc from "./Public";
const reducer = combineReducers({
  publicDoc,
});

export const store = configureStore({
  reducer,
});

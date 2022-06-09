import { configureStore } from "@reduxjs/toolkit";
import { publicReducer } from "./reducers/publicReducer";

export const store = configureStore({
    reducer: publicReducer,
  })
import { createReducer } from "@reduxjs/toolkit";
import { getFdoc } from "../actions/publicAction";

const initialState = {
  fdoc: [],
  ldoc: [],
};

export const publicReducer = createReducer(initialState, {
  [getFdoc]: (state, action) => {
    console.log(state);
    return { ...state, fdoc: action.payload };
  },
});

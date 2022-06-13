import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
// Slice
const slice = createSlice({
  name: "publicDoc",
  initialState: {
    fdoc: [],
    ldoc: [],
    isLoading: false,
  },
  reducers: {
    fdocSuccess: (state, action) => {
      state.fdoc = action.payload;
    },
    ldocSuccess: (state, action) => {
      state.ldoc = action.payload;
    },
    loading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export default slice.reducer;

// Actions
const { fdocSuccess, ldocSuccess, loading } = slice.actions;
export const getFdoc = (status) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await axios.post(`http://localhost:4001/api/fdoc/getByStatus`, {
      status,
    });
    dispatch(loading(false));
    dispatch(fdocSuccess(res.data.result));
  } catch (e) {
    return console.error(e.message);
  }
};

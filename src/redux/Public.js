import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
// Slice
const slice = createSlice({
  name: "publicDoc",
  initialState: {
    fdoc: [],
    ldoc: [],
    isLoading: false,
    isLoggedIn: false,
    user: {},
    error: null,
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
    createSuccess: (state, action) => {
      state.message = action.payload;
    },
    loginSuccess: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user;
    },
    fail: (state, action) => {
      state.error = action.payload;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.user = {};
    },
  },
});
export default slice.reducer;

// Actions
const { fdocSuccess, loginSuccess, loading, createSuccess, fail,logout } =
  slice.actions;
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
export const saveFdoc = (data) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await axios.post(`http://localhost:4001/api/fdoc/create`, data);
    dispatch(loading(false));
    dispatch(createSuccess(res.data.message));
  } catch (e) {
    return console.error(e.message);
  }
};
/*admin  actions*/
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await axios.post(`http://localhost:4001/api/login`, {
        email,
        password,
      });
      dispatch(loading(false));
      if (!res.data.error)
        dispatch(
          loginSuccess({
            user: res.data.result,
            isLoggedIn: true,
          })
        );
      else dispatch(fail(res.data.message));
    } catch (e) {
      dispatch(loading(false));
      dispatch(fail(e.message));
      return console.error(e.message);
    }
  };

export const logoutA = () => async (dispatch) => {
  dispatch(logout())
};

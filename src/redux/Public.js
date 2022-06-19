import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
const API_URL = "http://192.168.43.107:4001/api"
// Slice
const user = JSON.parse(localStorage.getItem("user"));
const doc = JSON.parse(localStorage.getItem("doc"));
const slice = createSlice({
  name: "publicDoc",
  initialState: {
    allfdoc: doc || [],
    allLdoc: [],
    fdoc: [],
    ldoc: [],
    isLoading: false,
    isLoggedIn: user && user.token ? true : false,
    error: null,
    message: null,
  },
  reducers: {
    fdocSuccess: (state, action) => {
      state.fdoc = action.payload;
    },
    fdocAdmin: (state, action) => {
      state.allfdoc = action.payload;
    },
    ldocAdmin: (state, action) => {
      state.allLdoc = action.payload;
    },
    ldocSuccess: (state, action) => {
      state.ldoc = action.payload;
    },
    loading: (state, action) => {
      state.isLoading = action.payload;
    },
    success: (state, action) => {
      state.message = action.payload;
    },
    loginSuccess: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    fail: (state, action) => {
      state.error = action.payload;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
    clearMessage: (state, action) => {
      state.message = null;
    },
  },
});
export default slice.reducer;

// Actions
const {
  fdocSuccess,
  loginSuccess,
  loading,
  success,
  fail,
  logout,
  fdocAdmin,
  clearMessage,
  ldocSuccess,
  ldocAdmin,
} = slice.actions;
// getting published document
export const getFdoc = (status) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await axios.post(`${API_URL}/fdoc/getByStatus`, {
      status,
    });
    dispatch(loading(false));
    dispatch(fdocSuccess(res.data.result));
  } catch (e) {
    return console.error(e.message);
  }
};
// setting message to null
export const clear = () => (dispatch) => dispatch(clearMessage());
// saving found document
export const saveFdoc = (data) => async (dispatch) => {
  console.log(data);
  try {
    dispatch(loading(true));
    const res = await axios({
      method: "post",
      url: `${API_URL}/fdoc/create`,
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch(loading(false));
    if (!res.data.error)
      dispatch(
        success(
          "Amakuru mutanze abitswe neza Ubishanzwe araza kuyangenzura maze ayemere kujya ahagaragara. Murakoze"
        )
      );
    else dispatch(success(res.data.message));
  } catch (e) {
    return console.error(e.message);
  }
};

// Publishing  document
export const viewFoundContact = (data) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await axios.post(
      `${API_URL}/fdoc/viewContact`,
      data
    );
    dispatch(loading(false));
    console.log(res);
    if (!res.data.error)
      dispatch(
        success(
          "Numero yuwatoye iyangombwa byanyu yoherejwe kuri email mwaduhaye. Murakoze"
        )
      );
    else dispatch(success(res.data.message));
  } catch (e) {
    dispatch(success(e.data.message));
    return console.error(e.message);
  }
};

/* lost ducument actions */
// getting published document
export const getLdoc = () => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await axios.post(`${API_URL}/ldoc/published`);
    dispatch(loading(false));
    dispatch(ldocSuccess(res.data.result));
  } catch (e) {
    return console.error(e.message);
  }
};

export const saveLdoc = (data) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await axios({
      method: "post",
      url: `${API_URL}/ldoc/create`,
      data: data,
    });
    dispatch(loading(false));
    if (!res.data.error)
      dispatch(
        success(
          "Amakuru mutanze abitswe neza Ubishanzwe araza kuyangenzura maze ayemere kujya ahagaragara. Murakoze"
        )
      );
    else dispatch(success(res.data.message));
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
      const res = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      dispatch(loading(false));
      if (!res.data.error) {
        localStorage.setItem("user", JSON.stringify(res.data.result));
        dispatch(getAllFdoc(res.data.result.token));
        dispatch(loginSuccess(true));
      } else dispatch(fail(res.data.message));
    } catch (e) {
      dispatch(loading(false));
      dispatch(fail(e.message));
      return console.error(e.message);
    }
  };

export const logoutA = () => async (dispatch) => {
  localStorage.removeItem("user");
  dispatch(logout());
};
//  getting all found document
export const getAllFdoc = (token) => async (dispatch) => {
  try {
    dispatch(loading(true));
    token = token ? token : JSON.parse(localStorage.getItem("user")).token;
    const res = await axios.get(
      `${API_URL}/fdoc/all?authToken=${token}`
    );
    dispatch(loading(false));
    if (!res.data.error) {
      localStorage.setItem("doc", JSON.stringify(res.data.result));
      dispatch(fdocAdmin(res.data.result));
    } else dispatch(fail(res.data.message));
  } catch (e) {
    return dispatch(fail(e.message));
  }
};
// deleting rejected document
export const reject = (id) => async (dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem("user")).token;
    dispatch(loading(true));
    const res = await axios.post(
      `${API_URL}/fdoc/reject?authToken=${token}`,
      { id: id }
    );
    if (!res.data.error) dispatch(getAllFdoc());
    dispatch(loading(false));
    dispatch(success(res.data.message));
  } catch (e) {
    dispatch(success(e.data.message));
    return console.error(e.message);
  }
};

// Publishing  document
export const publish = (id) => async (dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem("user")).token;
    dispatch(loading(true));
    const res = await axios.post(
      `${API_URL}/fdoc/update?authToken=${token}`,
      { id: id, data: { status: "published" } }
    );
    if (!res.data.error) dispatch(getAllFdoc());
    dispatch(loading(false));
    dispatch(success("Document published successfully"));
  } catch (e) {
    dispatch(success(e.data.message));
    return console.error(e.message);
  }
};

/* lost document */

//  getting all lost document
export const getAllLostdoc = () => async (dispatch) => {
  try {
    dispatch(loading(true));
    const token = JSON.parse(localStorage.getItem("user")).token;
    const res = await axios.get(
      `${API_URL}/ldoc/all?authToken=${token}`
    );
    dispatch(loading(false));
    if (!res.data.error) {
      dispatch(ldocAdmin(res.data.result));
    } else dispatch(fail(res.data.message));
  } catch (e) {
    return dispatch(fail(e.message));
  }
};
// deleting rejected document
export const rejectLostDoc = (id) => async (dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem("user")).token;
    dispatch(loading(true));
    const res = await axios.post(
      `${API_URL}/ldoc/reject?authToken=${token}`,
      { id: id }
    );
    if (!res.data.error) dispatch(getAllLostdoc());
    dispatch(loading(false));
    dispatch(success(res.data.message));
  } catch (e) {
    dispatch(success(e.data.message));
    return console.error(e.message);
  }
};

// Publishing  document
export const publishLostDoc = (id) => async (dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem("user")).token;
    dispatch(loading(true));
    const res = await axios.post(
      `${API_URL}/ldoc/update?authToken=${token}`,
      { id: id, data: { status: "published" } }
    );
    if (!res.data.error) dispatch(getAllLostdoc());
    dispatch(loading(false));
    dispatch(success("Document published successfully"));
  } catch (e) {
    dispatch(success(e.data.message));
    return console.error(e.message);
  }
};

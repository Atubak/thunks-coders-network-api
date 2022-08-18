import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: null, // the logged-in user
  accessToken: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeToken: (state, action) => {
      state.accessToken = action.payload;
    },
    storeUser: (state, action) => {
      state.me = action.payload;
    },
  },
});

export const { storeToken, storeUser } = authSlice.actions;

export default authSlice.reducer;

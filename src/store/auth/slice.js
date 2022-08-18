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
    loading: (state, action) => {
      state.loading = action.payload;
    },
    storeToken: (state, action) => {
      state.accessToken = action.payload;
    },
    storeUser: (state, action) => {
      state.me = action.payload;
    },
  },
});

export const { storeToken, storeUser, loading } = authSlice.actions;

export default authSlice.reducer;

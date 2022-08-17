import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  post: null,
  comments: [],
};

const postPageSlice = createSlice({
  name: "postPage",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = !state.loading;
    },
    postFullyFetched: (state, action) => {
      const { post, comments } = action.payload;

      state.post = post;
      state.comments = comments;

      state.loading = !state.loading;
    },
  },
});

export const { startLoading, postFullyFetched } = postPageSlice.actions;

export default postPageSlice.reducer;

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: fetch } = require("node-fetch");

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

// create async thunk

const fetchPost = createAsyncThunk("post/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const post = await response.json();

  return post;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.posts = action.payload;
    });

    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.posts = action.payload;
    });
  },
});

module.exports = postSlice.reducer;
module.exports.fetchPost = fetchPost;

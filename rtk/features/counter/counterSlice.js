const { createSlice } = require("@reduxjs/toolkit");

// Initial state
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
    },
  },
});

module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;

const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const counterReducer = require("../features/counter/counterSlice");

const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice");
const postReducer = require("../features/post/postSlice");

const logger = createLogger();

// configure store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamic: dynamicCounterReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;

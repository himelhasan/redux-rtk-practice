const { default: fetch } = require("node-fetch");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
const thunkMiddleware = require("redux-thunk");

// initial state
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

// actions

const fetchPostsRequested = () => {
  return {
    type: "posts/requested",
  };
};

const fetchPostSucceeded = (posts) => {
  return {
    type: "posts/succeeded",
    payload: posts,
  };
};
const fetchPostError = (error) => {
  return {
    type: "posts/error",
    payload: error,
  };
};

//

//  reducer functions

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/requested":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "posts/succeeded":
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: "",
      };
    case "posts/error":
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        posts: [],
      };

    default:
      break;
  }
};

// thunk functions

const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequested());

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const post = await response.json();

      dispatch(fetchPostSucceeded(post));
    } catch (err) {
      dispatch(fetchPostError(err));
    }
  };
};

// store create
const store = createStore(reducer, applyMiddleware(thunkMiddleware.default));

// subscribe to state change events

store.subscribe(() => {
  console.log(store.getState());
});

//   action dispatch

store.dispatch(fetchPosts());

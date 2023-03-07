const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");

const {
  dynamicCounterActions,
} = require("./features/dynamicCounter/dynamicCounterSlice");
const { fetchPost } = require("./features/post/postSlice");

console.log(`inital state: ${JSON.stringify(store.getState().counter)}`);

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

// disptach actions
// store.dispatch(counterActions.increment());
// store.dispatch(dynamicCounterActions.increment(5));

// store.dispatch(counterActions.increment());
// store.dispatch(dynamicCounterActions.increment(10));

// store.dispatch(counterActions.decrement());
// store.dispatch(dynamicCounterActions.decrement(15));

store.dispatch(fetchPost());

//

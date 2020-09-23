import { createStore } from "redux";

const add = ({ a, b }, c) => {
  return a + b + c;
};
console.log(add({ a: 11, b: 12 }, 13));

const incrementCount = ({ incrementBy } = {}) => ({
  type: "INCREMENT",
  incrementBy: typeof incrementBy === "number" ? incrementBy : 1,
});

const decrementCount = ({ decrementBy } = {}) => ({
  type: "DECREMENT",
  decrementBy: typeof decrementBy === "number" ? decrementBy : 1,
});

const resetCount = () => ({
  type: "RESET",
  count: 0,
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count,
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    case "RESET":
      return { count: action.count };
    case "SET":
      return { count: action.count };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 15 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 11 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 11 }));

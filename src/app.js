import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibilityExpense from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

const store = configureStore();

// store.dispatch(
//   addExpense({ description: "Water bill", amount: 4500, createdAt: 10 })
// );
// store.dispatch(
//   addExpense({ description: "Rent", amount: 45000, createdAt: 1000 })
// );
// store.dispatch(
//   addExpense({ description: "Gas bill", amount: 450, createdAt: 100 })
// );
// store.dispatch(setTextFilter("water"));

// setTimeout(() => {
//   store.dispatch(setTextFilter("bill"));
// }, 2000);

const state = store.getState();
console.log(state);
const visible = getVisibilityExpense(state.expenses, state.filters);
console.log(store);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

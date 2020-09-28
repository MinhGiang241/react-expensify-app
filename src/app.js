import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibilityExpense from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import { firebase } from "./firebase/firebase";

const store = configureStore();

const state = store.getState();
const visible = getVisibilityExpense(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {

//     console.log("log in");
//   } else {
//     history.push("/");
//     console.log("log out");
//   }
// });

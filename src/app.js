import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses, startAddExpense } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import getVisibilityExpense from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import { firebase } from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";

const store = configureStore();

const state = store.getState();
const visible = getVisibilityExpense(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
    console.log("uid", user.uid);
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
    console.log("log out");
  }
});

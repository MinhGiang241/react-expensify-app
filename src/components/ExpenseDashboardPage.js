import React from "react";
import ExpenseList from "./ExpensesList";
import ExpenseListFilters from "./ExpensiveListFilters";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;

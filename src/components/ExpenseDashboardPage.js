import React from "react";
import ExpenseList from "./ExpensesList";
import ExpenseListFilters from "./ExpensiveListFilters";
import ExpenseSummary from "./ExpensesSummary";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;

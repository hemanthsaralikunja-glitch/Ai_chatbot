import React from "react";
import Header from "../components/Header";
import ExpenseForm from "../components/ExpenseForm";

function AddExpense({ addExpense }) {
  const handleAddExpense = (expense) => {
    addExpense(expense);
    alert("Expense Added");
  };

  return (
    <div className="container">

      <Header />

      <ExpenseForm addExpense={handleAddExpense} />

    </div>
  );
}

export default AddExpense;
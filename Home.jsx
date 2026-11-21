import React from "react";
import Header from "../components/Header";
import ExpenseList from "../components/ExpenseList";

function Home({ expenses, deleteExpense, total }) {

  return (
    <div className="container">

      <Header />

      <h2>Total Expense: ₹{total}</h2>

      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
      />

    </div>
  );
}

export default Home;
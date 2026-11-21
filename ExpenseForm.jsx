import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: Date.now(),
      title,
      amount,
    };

    addExpense(expense);

    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">

      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Add Expense</button>

    </form>
  );
}

export default ExpenseForm;
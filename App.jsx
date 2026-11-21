import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const total = exp
  enses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              expenses={expenses}
              deleteExpense={deleteExpense}
              total={total}
            />
          }
        />
        <Route path="/add" element={<AddExpense addExpense={addExpense} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
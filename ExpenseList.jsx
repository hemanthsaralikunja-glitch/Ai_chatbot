import React from "react";

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div>

      {expenses.map((expense) => (
        <div className="card" key={expense.id}>

          <div>
            <h3>{expense.title}</h3>
            <p>₹{expense.amount}</p>
          </div>

          <button onClick={() => deleteExpense(expense.id)}>
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default ExpenseList;
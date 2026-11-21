import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>Expense Tracker</h1>

      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Expense</Link>
      </div>
    </div>
  );
}

export default Header;



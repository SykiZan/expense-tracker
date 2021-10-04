import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
function ExpensesList(props) {
  const expenses = props.expenses;
  if (expenses.length === 0) {
    return <p className="expenses-list__fallback">Found no expenses</p>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
}
export default ExpensesList;

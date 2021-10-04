import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    isFormOpenHandler();
  };

  const isFormOpenHandler = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <div className="new-expense">
      {isFormOpen && (
        <ExpenseForm
          onSaveExpense={saveExpenseDataHandler}
          onCloseForm={isFormOpenHandler}
        />
      )}
      {!isFormOpen && (
        <button onClick={isFormOpenHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;

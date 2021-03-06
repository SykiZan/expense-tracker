import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Laptop",
    amount: 1270.33,
    date: new Date(2019, 6, 1),
  },
  {
    id: "e6",
    title: "Fridge",
    amount: 640,
    date: new Date(2020, 8, 29),
  },
  {
    id: "e7",
    title: "Barbell (100kg)",
    amount: 1100,
    date: new Date(2020, 3, 18),
  },
  {
    id: "e8",
    title: "Vacation",
    amount: 450,
    date: new Date(2019, 11, 22),
  },
  {
    id: "e9",
    title: "Box of beer",
    amount: 42.5,
    date: new Date(2020, 7, 3),
  },
  {
    id: "e10",
    title: "Shoes",
    amount: 150,
    date: new Date(2021, 10, 13),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

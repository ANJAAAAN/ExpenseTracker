import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 2000,
    date: new Date(2022, 7, 14),
  },
  { 
    id: "e2", 
    title: "New TV", 
    amount: 1500, 
    date: new Date(2022, 2, 12),
   },
   
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk(Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  { 
    id: "e5", 
    title: "Laptop", 
    amount: 5000, 
    date: new Date(2022, 9, 12),
   },
   { 
    id: "e6", 
    title: "clothes", 
    amount: 9000, 
    date: new Date(2022, 10, 2),
   },

];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      // updating the list of expenses on the reference to previous list using spread operator.

      return [expense, ...prevExpenses];
    });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

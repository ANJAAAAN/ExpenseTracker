import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    //  making afnuction to pass data from child to parent component
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // this paramaeter expect the object which is submitted in expensedata in form.
      id: Math.random().toString(),
    };
    // data showing form app.js component 
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;

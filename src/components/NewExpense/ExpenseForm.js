import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enterAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enterDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandeler = (event) => {
    event.preventDefault(); // to make sure that he page doesnot reload after submitting a form

    const expenseData={
      title:enterTitle,
      amount:+enterAmount,
      date: new Date(enterDate)
    };
    //data comming from NewExpense.js
    props.onSaveExpenseData(expenseData);

    // calling this empty string to override what user entered and clear the form.
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandeler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enterAmount}  // this will set the entered value to new value
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
      
    </form>

  );
};

export default ExpenseForm;

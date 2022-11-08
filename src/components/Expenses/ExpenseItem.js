import React, {  } from "react"; 
// usestste is react hook
// all react hooks start with (use) & must be called in direct react function
// usesate is a function provided by react libarry this allows us to define values
//as state where changes to these values should reflect in componenets

import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>

   
    </Card>
  );
}

export default ExpenseItem;

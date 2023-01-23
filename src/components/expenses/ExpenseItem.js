import React, { useState } from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../uI/Card";

const ExpenseItem = (props) => {

  const [title, setTitile]=useState(props.title)


  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description" >
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick = {setTitile}>Change title</button>
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;

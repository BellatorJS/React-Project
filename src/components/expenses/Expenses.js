import React, {useState} from 'react'
import './Expenses.css'
import ExpenseFilter from '../expenseFilter/ExpenseFilter'
import ExpenseItem from './ExpenseItem'


const Expenses = (props) => {
  const [selectedYear, setYear] = useState(2019)

  const handleUserYear = (event) => {
      event.preventDefault()

      setYear(event.target.value)

  }

  return (

  
    <div className='expenses'>
      <ExpenseFilter selectedYear={ selectedYear } onHandleYear={handleUserYear}/>
        <ExpenseItem
        date = {props.items[0].date} 
        title = {props.items[0].title}
        amount = {props.items[0].amount}   
        />
        <ExpenseItem
        date = {props.items[1].date} 
        title = {props.items[1].title}
        amount = {props.items[1].amount}   
        />
        <ExpenseItem
        date = {props.items[2].date} 
        title = {props.items[2].title}
        amount = {props.items[2].amount}   
        />                
    </div>

  )
}

export default Expenses
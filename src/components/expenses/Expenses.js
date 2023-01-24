import React, {useState} from 'react'
import './Expenses.css'
import ExpenseFilter from '../expenseFilter/ExpenseFilter'
import ExpenseList from './ExpensesList'
import ExpensesChart from './ExpensesChart'


const Expenses = (props) => {
  const [filteredYear, setYear] = useState('2019')
  const handleUserYear = (event) => {
      setYear(event.target.value)
  }

 const filteredExpenses = props.items.filter((expense)=>expense.date.getFullYear().toString()===filteredYear)

  return (
    <div className='expenses'>
      <ExpenseFilter selectedYear = { filteredYear } onHandleYear={handleUserYear}/>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses}/>
    </div>

  )
 }

export default Expenses
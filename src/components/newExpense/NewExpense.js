import React from 'react'
import './NewExpense.css'
import './NewExpense.js'
import ExpenseForm from './ExpensForm.js'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) =>{

  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
  }
  props.onAddExpense(expenseData)
  }


  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenxeData = {saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense
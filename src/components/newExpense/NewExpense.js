import React, { useState } from 'react'
import './NewExpense.css'
import './NewExpense.js'
import ExpenseForm from './ExpensForm.js'

const NewExpense = (props) => {
  const [isEditing, setButtonStatus] = useState(false)

  const startEditingHandler=()=> {
    setButtonStatus(true)
  }

  const endEditingHandler=()=> {
    setButtonStatus(false)
  }

  const saveExpenseDataHandler = (enteredExpenseData) =>{

  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
  }
  props.onAddExpense(expenseData)
  endEditingHandler()
  }


  return (
    <div className='new-expense'>

    {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    {isEditing && <ExpenseForm 
    onSaveExpenxeData = {saveExpenseDataHandler}
    onCancel={endEditingHandler}
    />}
        
    </div>
  )
}

export default NewExpense
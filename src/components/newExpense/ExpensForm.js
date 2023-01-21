import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpensForm = (props) => {

    const [enteredTitle , setEnteredTitle]= useState('')
    const [enteredAmount , setEnteredAmount]= useState('')
    const [enteredDate , setEnteredDate]= useState('')

    const handleSubmit= (event)=> {
        event.preventDefault()

        const expenseData = {
            title:enteredTitle,
            amount: enteredAmount,
            enteredDate: new Date(enteredDate)  
        }
        props.onSaveExpenxeData(expenseData)
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");


    }
    const titleChangehundler = (event)=> {
        setEnteredTitle(event.target.value)
    }
    const amountChangehundler = (event)=> {
        setEnteredAmount(event.target.value)
    }
    const dateChangehundler = (event)=> { 
        setEnteredDate(event.target.value)    
    }


  return (
    <form onSubmit={handleSubmit}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangehundler}/>
            </div>
        </div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input 
                type='number'
                value={enteredAmount}
                 min='0.01' step='0.01' onChange={amountChangehundler} />
            </div>
        </div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date'
                 min='2023-01-01'
                 value={enteredDate}
                max='2024-01-01' onChange={dateChangehundler}/>
            </div>
        </div>

        <div className='new-expense__actions'>
            <button type='sumbit'>Add expense</button>
        </div>
    </form>

  )
}

export default ExpensForm
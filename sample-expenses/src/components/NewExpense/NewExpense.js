import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false);
    }
    
    const startEditingHandling = () => {
      setIsEditing(true);
    }
    const stopEditingHandling = () => {
      setIsEditing(false);
    }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick = {startEditingHandling}> Add New Expense </button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandling} /> }
    </div>
  );
};

export default NewExpense;
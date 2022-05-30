import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    let [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        cancelEditingHandler();
        // console.log(expenseData);
    };
    const isEditingHandler = () => {
        setIsEditing(true);
    };
    const cancelEditingHandler = () => {
        setIsEditing(false);
    };

    return (<div className="new-expense">
        {!isEditing && <button onClick={isEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEditingHandler} />}
    </div>);
};

export default NewExpense;
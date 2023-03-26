import { useState } from 'react';

import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const clickHandler = () => setShowExpenseForm((prevState) => !prevState);

  if (!showExpenseForm) {
    return (
      <div className='new-expense'>
        <button onClick={clickHandler}>Add New Expense</button>
      </div>
    );
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm
        closeExpenseForm={clickHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;

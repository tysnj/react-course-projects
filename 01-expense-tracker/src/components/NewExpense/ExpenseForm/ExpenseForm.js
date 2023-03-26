import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = ({closeExpenseForm, onSaveExpenseData}) => {

  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const formChangeHandler = (e) =>
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });

  const cancelHandler = (e) => {
    closeExpenseForm()
  }
  
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: formData.title,
      amount: +formData.amount,
      date: new Date(formData.date),
    };

    onSaveExpenseData(expenseData)

    setFormData({
      title: '',
      amount: '',
      date: '',
    })
    closeExpenseForm()
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            name='title'
            onChange={formChangeHandler}
            type='text'
            value={formData.title}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            min='0.01'
            name='amount'
            onChange={formChangeHandler}
            step='0.01'
            type='number'
            value={formData.amount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            name='date'
            min='2020-01-01'
            max='2023-12-31'
            onChange={formChangeHandler}
            type='date'
            value={formData.date}
          />
        </div>
        <div className='new-expense__actions'>
          <button type='button' onClick={cancelHandler}>Cancel</button>
          <button type='submit' onClick={submitHandler}>
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

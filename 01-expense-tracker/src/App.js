import { useState } from 'react';
import expenses from './mockData';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [storedExpenses, setStoredExpenses] = useState(expenses)

  const addExpenseHandler = (expenseData) => {
    setStoredExpenses((prevState) => [...prevState, expenseData])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses data={storedExpenses} />
    </div>
  );
};

export default App;

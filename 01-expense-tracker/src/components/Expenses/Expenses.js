import { useState } from 'react';
import Card from './UI/Card/Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList/ExpensesList';
import ExpensesChart from './ExpensesChart/ExpensesChart';
import './Expenses.css';

const Expenses = ({ data }) => {
  const [selectedFilterOption, setSelectedFilterOption] = useState('2020');

  const filterChangeHandler = (selectedOption) => {
    setSelectedFilterOption(selectedOption);
  };

  const filteredExpenses = data.filter(
    (expense) => expense.date.getFullYear().toString() === selectedFilterOption
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selectedOption={selectedFilterOption}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

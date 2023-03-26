import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';
const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {expenses.map((expense) => (
        <ExpenseItem
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
          title={expense.title}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

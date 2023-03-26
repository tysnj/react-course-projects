import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../UI/Card/Card';
import './ExpenseItem.css';

const ExpenseItem = ({ title, date, amount }) => {
  const cost = `$${amount}`;
  
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{cost}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

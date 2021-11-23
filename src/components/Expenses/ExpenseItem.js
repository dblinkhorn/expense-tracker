import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// props inherited from App.js file
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        {/* props (props.date) inherited from App.js sent down again into ExpenseDate file */}
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// props inherited from App.js file
const ExpenseItem = (props) => {

  // destructure retun value of useState which always returns two items
  // first, the current state value; second, the function which updates the state
  const [title, setTitle] = useState(props.title);

  // function to be used in button "onClick" property
  const handleClick = () => {
    setTitle('Updated!');
  };

  return (
    <Card className='expense-item'>
      {/* props (props.date) inherited from App.js sent down again into ExpenseDate file */}
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={handleClick}>Edit Title</button>
    </Card>
  );
};

export default ExpenseItem;
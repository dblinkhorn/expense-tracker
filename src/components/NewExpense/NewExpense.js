import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const submitExpenseFormHandler = (expenseFormData) => {
    const expenseData = {
      // create new object from form data
      ...expenseFormData,
      // add new id key/value
      id: Math.random().toString()
    };
    props.addNewExpense(expenseData);
    setShowExpenseForm(false);
  };

  const showExpenseFormHandler = () => {
    setShowExpenseForm(true);
  }

  const hideExpenseFormHandler = () => {
    setShowExpenseForm(false);
  }

  return (
    <div className='new-expense'>
      {!showExpenseForm && <button onClick={showExpenseFormHandler}>Add New Expense</button>}
      {/* custom prop function to get all submitted form data
        to be used by ExpenseForm */}
      {showExpenseForm && (
        <ExpenseForm
          onSubmitExpenseData={submitExpenseFormHandler}
          onCancel={hideExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const submitExpenseFormHandler = (expenseFormData) => {
    const expenseData = {
      // create new object from form data
      ...expenseFormData,
      // add new id key/value
      id: Math.random().toString()
    };
    props.addNewExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      {/* custom prop of function to get all submitted form data
        to be used by ExpenseForm */}
      <ExpenseForm onSubmitExpenseData={submitExpenseFormHandler} />
    </div>
  );
};

export default NewExpense;
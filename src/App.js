import Expenses from './components//Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  // main data used as props in child components
  const expenses = [
    {
      id: 'expense1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'expense2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'expense3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'expense4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // function passed as a prop into NewExpense to retrieve
  // data from form input to be added to expenses array above
  const addExpenseHandler = (newExpense) => {
    console.log('From App.js');
    console.log(newExpense);
  };

  return (
    <div className="App">
      {/* pass function as custom prop into NewExpense */}
      <NewExpense addNewExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;

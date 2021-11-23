import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

// props inherited from App.js
const Expenses = (props) => {
  // set initial year filter value to 2021
  const [selectedYear, setSelectedYear] = useState('2021');

  const getSelectedFilterYear = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log('Expenses.js');
    console.log(selectedYear);
  };

  const filteredExpenses = props.expenseItem.filter((expense) => {
    // adds expense item to new array if the year of that item matches
    // the selected year from expenses filter
    return expense.date.getFullYear().toString() === selectedYear;
  });

  // default value if no filtered expenses
  let expensesContent = <p>No expenses found.</p>;

  // if expenses, display each
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        // props from App.js sent down again into ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onSelectedYearHandler={getSelectedFilterYear}
        year={selectedYear}
      />
      {expensesContent};
    </Card>
  );
};

export default Expenses;
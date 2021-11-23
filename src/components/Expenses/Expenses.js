import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

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

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onSelectedYearHandler={getSelectedFilterYear}
        year={selectedYear}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
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

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onSelectedYearHandler={getSelectedFilterYear}
        year={selectedYear}
      />
      {/* props from App.js sent down again into ExpenseItems */}
      {props.expenseItem.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))};
    </Card>
  );
};

export default Expenses;
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
      <ExpensesFilter onSelectedYearHandler={getSelectedFilterYear} year={selectedYear} />
      {/* props from App.js sent down again into ExpenseItem */}
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
};

export default Expenses;
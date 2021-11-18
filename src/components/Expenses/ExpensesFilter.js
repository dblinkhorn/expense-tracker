import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  // function to set selectedYear to selected year dropdown value
  const selectYearHandler = (event) => {
    // uses custom props function declared in Expenses.js to send
    // selected year up to parent component (Expenses.js)
    props.onSelectedYearHandler(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.year} onChange={selectYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
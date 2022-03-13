import "../UI/Expenses.css";
import { useState } from "react";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterYearHandler}
      />

      <ExpenseChart expenses={filteredExpenses} />

      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

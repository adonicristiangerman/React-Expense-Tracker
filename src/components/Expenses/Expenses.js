import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [receivedDate, setReceivedDate] = useState("2020");

  function recivedDateHandler(date) {
    setReceivedDate(date);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === receivedDate;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={receivedDate}
        onYearSelected={recivedDateHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;

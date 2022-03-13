import "../UI/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onAddNewExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveNewExpenseDataHandler = (newExpenseData) => {
    const expenseData = { ...newExpenseData };

    onAddNewExpense(expenseData);
  };

  const showExpenseForm = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={showExpenseForm}>ADD NEW EXPENSE</button>}

      {isEditing && (
        <ExpenseForm
          onSaveNewExpenseData={saveNewExpenseDataHandler}
          onStopEditing={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

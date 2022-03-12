import "../UI/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddNewExpense }) => {
  const saveNewExpenseDataHandler = (newExpenseData) => {
    const expenseData = { ...newExpenseData };

    onAddNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpenseData={saveNewExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

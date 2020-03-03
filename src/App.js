import React, { useState } from 'react';
import './assets/style.css';
import Top from './components/Top';
import Bottom from './components/Bottom';

function App() {
  const [listBudget, setListBudget] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [type] = useState('inc');
  const [description] = useState('');
  const [value] = useState(0);

  // Add budget

  function handleAddNewBudget({ id, type, description, value }) {
    if (value > 0) {
      listBudget.push({
        id,
        type: parseInt(type),
        description,
        value
      });
      setListBudget([...listBudget]);
      if (type === 0) {
        var newsTotalInc = totalIncome;
        newsTotalInc = newsTotalInc + parseFloat(value);
        setTotalIncome(newsTotalInc);
      }
      if (parseInt(type) === 1) {
        var newsTotalExp = totalExpenses;
        newsTotalExp = newsTotalExp + parseFloat(value);
        setTotalExpenses(newsTotalExp);
      }
    }
  }

  // Delete Budget
  function handleDeleteBudget(budgetDelete, callback) {
    let newBudget = listBudget.filter(budget => budget.id !== budgetDelete.id);
    setListBudget(newBudget);
    if (budgetDelete.type === 0) {
      var newsTotalInc = totalIncome;
      newsTotalInc = newsTotalInc - parseFloat(budgetDelete.value);
      setTotalIncome(newsTotalInc);
    }
    if (parseInt(budgetDelete.type) === 1) {
      var newsTotalExp = totalExpenses;
      newsTotalExp = newsTotalExp - parseFloat(budgetDelete.value);
      setTotalExpenses(newsTotalExp);
    }
    callback();
  }

  let injectedPropsBottom = {
    type,
    value,
    listBudget,
    totalIncome,
    description,
    totalExpenses,
    handleAddNewBudget,
    handleDeleteBudget
  };

  return (
    <>
      <Top totalIncome={totalIncome} totalExpenses={totalExpenses} />
      <Bottom {...injectedPropsBottom} />
    </>
  );
}

export default App;

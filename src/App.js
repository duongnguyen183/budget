import React, { useState } from 'react';
import './assets/style.css';
import { v4 as uuidv4 } from 'uuid';
import Top from './components/Top';
import Bottom from './components/Bottom';

function App() {
  const [budgetList, setBudgetList] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [type, setType] = useState('inc');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);

  // Add budget
  const handleChangeType = evt => {
    setType(evt.target.value);
  };
  const handleChangeDescription = evt => {
    setDescription(evt.target.value);
  };
  const handleChangeValue = evt => {
    setValue(evt.target.value);
  };
  const handleAdd = () => {
    if (value > 0) {
      const newBudget = {
        id: uuidv4(),
        type,
        description,
        value
      };
      budgetList.push(newBudget);
      setBudgetList([...budgetList]);

      if (type === 'inc') {
        var updateTotalIncome = parseFloat(totalIncome) + parseFloat(value);
        setTotalIncome(updateTotalIncome);
      }
      if (type === 'exp') {
        var updateTotalExpenses = parseFloat(totalExpenses) + parseFloat(value);
        setTotalExpenses(updateTotalExpenses);
      }
      setTotal(parseFloat(totalIncome) + parseFloat(totalExpenses));
      setType('inc');
      setDescription('');
      setValue(0);
    }
  };
  const handleDelete = evt => {
    const budgetid = evt.target.getAttribute('budgetid');
    console.log('budgetid');
    console.log(budgetid);
    console.log(evt);
  };
  return (
    <>
      <Top
        total={total}
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
      />
      <Bottom
        type={type}
        value={value}
        handleAdd={handleAdd}
        budgetList={budgetList}
        totalIncome={totalIncome}
        description={description}
        handleDelete={handleDelete}
        totalExpenses={totalExpenses}
        handleChangeType={handleChangeType}
        handleChangeValue={handleChangeValue}
        handleChangeDescription={handleChangeDescription}
      />
    </>
  );
}

export default App;

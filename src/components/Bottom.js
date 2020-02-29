import React from 'react';
import Add from './Add';
import Income from './Income';
import Expenses from './Expenses';

export default function Bottom({
  type,
  value,
  handleAdd,
  budgetList,
  description,
  totalIncome,
  handleDelete,
  totalExpenses,
  handleChangeType,
  handleChangeValue,
  handleChangeDescription
}) {
  return (
    <div className='bottom'>
      <Add
        type={type}
        value={value}
        handleAdd={handleAdd}
        description={description}
        handleChangeType={handleChangeType}
        handleChangeValue={handleChangeValue}
        handleChangeDescription={handleChangeDescription}
      />

      <div className='container clearfix'>
        <Income budgetList={budgetList} handleDelete={handleDelete} />
        <Expenses
          budgetList={budgetList}
          totalIncome={totalIncome}
          handleDelete={handleDelete}
          totalExpenses={totalExpenses}
        />
      </div>
    </div>
  );
}

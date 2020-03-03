import React from 'react';
import Add from './Add';
import ListBudgetAll from './ListBudgetAll';

export default function Bottom({
  listBudget,
  totalIncome,
  totalExpenses,
  handleAddNewBudget,
  handleDeleteBudget
}) {
  return (
    <div className='bottom'>
      <Add handleAddNewBudget={handleAddNewBudget} />

      <div className='container clearfix'>
        <ListBudgetAll
          listBudget={listBudget}
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
          handleDeleteBudget={handleDeleteBudget}
        />
      </div>
    </div>
  );
}

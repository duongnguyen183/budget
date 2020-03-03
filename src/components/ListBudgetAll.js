import React, { useEffect, useState } from 'react';

import ListBudgetItem from './ListBudgetItem';

import Modal from './Modal';

export default function ListBudgetAll({
  listBudget,
  totalIncome,
  totalExpenses,
  handleDeleteBudget
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [budgetSelected, setBudgetSelected] = useState(null);

  useEffect(() => {
    if (budgetSelected) {
      setIsOpenModal(true);
    } else {
      setIsOpenModal(false);
    }
  }, [budgetSelected]);

  function handleSubmit() {
    handleDeleteBudget &&
      typeof handleDeleteBudget === 'function' &&
      handleDeleteBudget(budgetSelected, () => {
        setIsOpenModal(false);
        setBudgetSelected(null);
      });
  }
  return (
    <>
      <div className='income'>
        <h2 className='income__title'>Income</h2>

        <div className='income__list'>
          {listBudget &&
            listBudget.map(budget => {
              return (
                <>
                  {budget.type === 0 ? (
                    <ListBudgetItem
                      key={budget.id}
                      budget={budget}
                      setBudgetSelected={setBudgetSelected}
                      handleDeleteBudget={handleDeleteBudget}
                    />
                  ) : null}
                </>
              );
            })}
        </div>
      </div>

      <div className='expenses'>
        <h2 className='expenses__title'>Expenses</h2>

        <div className='expenses__list'>
          {listBudget &&
            listBudget.map(budget => {
              return (
                <>
                  {budget.type === 1 ? (
                    <ListBudgetItem
                      key={budget.id}
                      budget={budget}
                      totalIncome={totalIncome}
                      totalExpenses={totalExpenses}
                      setBudgetSelected={setBudgetSelected}
                      handleDeleteBudget={handleDeleteBudget}
                    />
                  ) : null}
                </>
              );
            })}
        </div>
      </div>

      <Modal
        title='Alert'
        isVisible={isOpenModal}
        renderFooter={() => {
          return (
            <>
              <button
                onClick={handleSubmit}
                type='button'
                style={{ marginRight: 10 }}
                className='btn btn-primary'
              >
                Confirm
              </button>
              <button
                onClick={() => setBudgetSelected(null)}
                type='button'
                className='btn btn-secondary'
              >
                Cancel
              </button>
            </>
          );
        }}
      >
        <h4>Are you sure you want to delete this item?</h4>
      </Modal>
    </>
  );
}

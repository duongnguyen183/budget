import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export default function Expenses({ budgetList, totalIncome, handleDelete }) {
  return (
    <div className='expenses'>
      <h2 className='expenses__title'>Expenses</h2>

      <div className='expenses__list'>
        {budgetList &&
          budgetList.map(budget => {
            return (
              <>
                {budget.type === 'exp' ? (
                  <div key={budget.id} className='item clearfix' id={budget.id}>
                    <div className='item__description'>
                      {budget.description}
                    </div>
                    <div className='right clearfix'>
                      <div className='item__value'>
                        - {Number.parseFloat(budget.value).toFixed(2)}
                      </div>
                      <div className='item__percentage'>
                        {Math.round(
                          (parseFloat(budget.value) / parseFloat(totalIncome)) *
                            100
                        )}
                        {'%'}
                      </div>
                      <div className='item__delete'>
                        <button
                          type='button'
                          className='item__delete--btn'
                          budgetid={budget.id}
                          onClick={handleDelete}
                        >
                          <IoIosCloseCircleOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </>
            );
          })}
      </div>
    </div>
  );
}

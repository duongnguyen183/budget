import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export default function ListBudgetItem({
  budget,
  totalIncome,
  setBudgetSelected
}) {
  return (
    <>
      <div className='item clearfix' id={budget.id}>
        <div className='item__description'>{budget.description}</div>
        <div className='right clearfix'>
          <div className='item__value'>
            {budget.type === 0 ? '+' : '-'}
            {Number.parseFloat(budget.value).toFixed(2)}
          </div>
          {budget.type === 0 ? (
            ''
          ) : (
            <div className='item__percentage'>
              {totalIncome !== 0 && budget.value / totalIncome > 0 ? (
                <>{Math.ceil((budget.value / totalIncome) * 100)}%</>
              ) : (
                '---'
              )}
            </div>
          )}
          <div className='item__delete'>
            <button type='button' className='item__delete--btn'>
              <IoIosCloseCircleOutline
                onClick={() => {
                  setBudgetSelected(budget);
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

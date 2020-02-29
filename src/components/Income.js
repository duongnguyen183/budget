import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export default function Income({ budgetList, handleDelete }) {
  return (
    <div className='income'>
      <h2 className='icome__title'>Income</h2>

      <div className='income__list'>
        {budgetList &&
          budgetList.map(budget => {
            return (
              <>
                {budget.type === 'inc' ? (
                  <div key={budget.id} className='item clearfix' id={budget.id}>
                    <div className='item__description'>
                      {budget.description}
                    </div>
                    <div className='right clearfix'>
                      <div className='item__value'>
                        + {Number.parseFloat(budget.value).toFixed(2)}
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

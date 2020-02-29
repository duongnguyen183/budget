import React from 'react';

export default function Top({ total, totalIncome, totalExpenses }) {
  let monthNumber = new Date().getMonth();
  let year = new Date().getFullYear();
  let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  let monthName = monthNames[monthNumber];
  return (
    <div className='top'>
      <div className='budget'>
        <div className='budget__title'>
          Available Budget in{' '}
          <span className='budget__title--month'>
            {monthName} {year}
          </span>
          :
        </div>

        <div className='budget__value'>
          {(parseFloat(totalIncome) - parseFloat(totalExpenses)).toFixed(2)}
        </div>

        <div className='budget__income clearfix'>
          <div className='budget__income--text'>Income</div>
          <div className='right'>
            <div className='budget__income--value'>
              + {parseFloat(totalIncome).toFixed(2)}
            </div>
            <div className='budget__income--percentage'>&nbsp;</div>
          </div>
        </div>

        <div className='budget__expenses clearfix'>
          <div className='budget__expenses--text'>Expenses</div>
          <div className='right clearfix'>
            <div className='budget__expenses--value'>
              - {parseFloat(totalExpenses).toFixed(2)}
            </div>
            <div className='budget__expenses--percentage'>
              {totalExpenses === 0 && totalIncome === 0 ? (
                '---'
              ) : (
                <>
                  {Math.ceil(
                    (parseFloat(totalExpenses) / parseFloat(totalIncome)) * 100
                  )}
                  %
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

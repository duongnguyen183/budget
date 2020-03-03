import React, { useState } from 'react';

import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { v4 as uuidv4 } from 'uuid';

import { TYPE } from '../constants';

const initBudget = { type: 0, description: '', value: 0 };

export default function Add({ handleAddNewBudget }) {
  const [budget, setBudget] = useState(initBudget);

  function handleOnChange(keyField) {
    return e => {
      setBudget({ ...budget, [keyField]: e.target.value });
    };
  }

  function handleSubmit() {
    let data = { id: uuidv4(), ...budget };
    handleAddNewBudget(data);
    setBudget(initBudget);
  }

  return (
    <div className='add'>
      <div className='add__container'>
        <select
          className={`add__type ${TYPE[budget.type].classSelect}`}
          value={budget.type}
          onChange={handleOnChange('type')}
        >
          {TYPE.map((type, index) => (
            <option key={index} value={index}>
              {type.labelSelect}
            </option>
          ))}
        </select>
        <input
          type='text'
          className='add__description'
          placeholder='Add description'
          value={budget.description}
          onChange={handleOnChange('description')}
        />
        <input
          type='number'
          className='add__value'
          placeholder='Value'
          value={budget.value}
          onChange={handleOnChange('value')}
        />
        <button className={`add__btn ${TYPE[budget.type].classBtn}`}>
          <IoIosCheckmarkCircleOutline onClick={handleSubmit} />
        </button>
      </div>
    </div>
  );
}

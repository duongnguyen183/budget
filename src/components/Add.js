import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
export default function Add({
  type,
  value,
  budgetList,
  handleAdd,
  description,
  handleChangeType,
  handleChangeValue,
  handleChangeDescription
}) {
  return (
    <div className='add'>
      <div className='add__container'>
        <select
          className={
            type && type === 'inc' ? 'add__type' : 'add__type red-focus'
          }
          value={type}
          onChange={handleChangeType}
        >
          <option value='inc'>+</option>
          <option value='exp'>-</option>
        </select>
        <input
          type='text'
          className='add__description'
          placeholder='Add description'
          value={description}
          onChange={handleChangeDescription}
        />
        <input
          type='number'
          className='add__value'
          placeholder='Value'
          value={value}
          onChange={handleChangeValue}
        />
        <button
          className={type && type === 'inc' ? 'add__btn' : 'add__btn red'}
          onClick={handleAdd}
        >
          <IoIosCheckmarkCircleOutline />
        </button>
      </div>
    </div>
  );
}

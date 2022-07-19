import s from './filter.module.css';
import React from 'react';

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Find contacts by name
    <input
      className={s.input}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

export default Filter;

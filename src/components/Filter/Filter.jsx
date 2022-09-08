import s from './filter.module.css';
import React from 'react';
// import PropTypes from 'prop-types';
import { filterContacts } from 'redux/conactSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filterInput = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          // value={value}
          onChange={filterInput}
        />
      </label>
    </>
  );
};

export default Filter;

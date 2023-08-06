import {useState} from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
export const Filter = ({changeFilter}) => {
  const [inputValue, setInputValue] = useState ('');

  const handleChange = evt => {
    changeFilter (evt.target.value);
    setInputValue (evt.target.value);
  };

  return (
    <div>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          name="name"
          value={inputValue}
          onChange={handleChange}
          className={css.input}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

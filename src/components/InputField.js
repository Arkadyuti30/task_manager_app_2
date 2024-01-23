import React, { useState } from 'react';
import './styles.css';

const InputField = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="input-wrapper">
      {inputValue && 
        <label className="placeholder-label">{props.placeholder}</label>
      }
      <input
        type="text"
        className="input-field"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};
export default InputField;
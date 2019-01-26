import React from "react";

const selectorStyle = {
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderRadius: '0'
}

const Selector = ({options, handleChange, value}) => {
  return (
    <select onChange={handleChange} value={value} className='form-control' style={selectorStyle}>
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  )
}

export default Selector;

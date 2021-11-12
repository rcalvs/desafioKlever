import React from 'react';

const LabelSelect = (props) => {
  const { select, options, getExpense } = props;
  const { text, control, testid } = select;

  return (
    <label htmlFor={ control }>
      {text}

      <select
        id={ control }
        name={ control }
        onChange={ getExpense }
        data-testid={ testid }
      >
        {options.map((value) => (
          <option key={ value } data-testid={ value }>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LabelSelect;
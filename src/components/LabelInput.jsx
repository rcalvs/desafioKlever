import React from 'react';

const LabelInput = (props) => {
  const { input, getExpense } = props;
  const { text, type, control, testid } = input;

  return (
    <label htmlFor={ control }>
      {text}
      <input
        type={ type }
        id={ control }
        name={ control }
        onChange={ getExpense }
        data-testid={ testid }
      />
    </label>
  );
};

export default LabelInput;

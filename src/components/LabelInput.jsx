import React from 'react';

const LabelInput = (props) => {
  const { input, getExpense } = props;
  const { text, type, control, testid } = input;

  return (
    <div className="flex rounded-md mx-2 bg-gray-200 m-auto border-2 text-gray-700">
      <label className="rounded-md border-2 bg-gray-200 m-auto h-12 self-center pt-2 p-1" htmlFor={ control }>
        {text}
      </label>
        <input
          className="ml-4 rounded-md"
          type={ type }
          id={ control }
          name={ control }
          onChange={ getExpense }
          data-testid={ testid }
        />
    </div>
  );
};

export default LabelInput;

import React from 'react';

const LabelSelect = (props) => {
  const { select, options, getExpense } = props;
  const { text, control, testid } = select;

  return (
    <div className="flex rounded-md mx-2 bg-gray-200 m-auto border-2 text-gray-700">
      <label className="rounded-md border-2 bg-gray-200 m-auto h-12 self-center pt-2 p-1" htmlFor={ control }>
        {text}
      </label>
        <select
          className="rounded-md border-2 bg-gray-100 p-1 px-2"
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
    </div>
  );
};

export default LabelSelect;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense, editExpenses } from '../actions';

const TBody = () => {
  const { expenses } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const removeExpense = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    dispatch(deleteExpense(newExpenses));
  };
  const renderTBody = () => expenses.map((expense) => {
    const {
      id, description, method, value, tag, exchangeRates, currency,
    } = expense;
    console.log(expense);
    const { ask, name } = exchangeRates[currency];
    const convertedValue = (value * ask).toFixed(2);
    const cointConverted = name.split('/')[0];
    return (
      <tbody className="text-gray-800 p-2" key={ id }>
        <tr className="text-center">
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td className="font-bold">{value}</td>
          <td>{parseFloat(ask).toFixed(2)}</td>
          <td>{cointConverted}</td>
          <td className="italic">{convertedValue}</td>
          <td>Real</td>
          <td>
            <button
              type="button"
              className="text-red-600 m-2"
              onClick={ () => removeExpense(id) }
              data-testid="delete-btn"
            >
              Deletar
            </button>
            <button
              className="text-yellow-600 m-2"
              type="button"
              onClick={ () => dispatch(editExpenses(true, id)) }
              data-testid="edit-btn"
            >
              Editar
            </button>
          </td>
        </tr>
      </tbody>
    );
  });

  return renderTBody();
};

export default TBody;

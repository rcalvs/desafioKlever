import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense, getExpense } from '../actions';

function Table(props) {
  
  const handleClick = (key, e) => {
    const { expenses, globalDeleteExpense, globalGetExpense } = props;
    const { name } = e.target;
    const newFilteredExpenses = expenses.filter((expense) => (expense.id !== key));
    const newGetExpDetails = expenses.find((expense) => (expense.id === key));
    if (name === 'delete-btn') {
      globalDeleteExpense(newFilteredExpenses);
    } else {
      globalGetExpense(newGetExpDetails);
    }
  }
  
  
  const fillTableRows = () => {
    const { expenses } = props;
    return (
      expenses.map((expense) => (
        <tr key={ expense.id }>
          <td>{ expense.description }</td>
          <td>{ expense.tag}</td>
          <td>{ expense.method }</td>
          <td>{ expense.value }</td>
          <td>{ expense.exchangeRates[expense.currency].name }</td>
          <td>{ parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
          <td>
            { parseFloat(expense.value * expense.exchangeRates[expense.currency].ask)
              .toFixed(2) }
          </td>
          <td>Real</td>
          <td>
            <button
              type="button"
              data-testid="edit-btn"
              name="edit-btn"
              onClick={ (event) => handleClick(expense.id, event) }
            >
              Editar
            </button>
            <button
              type="button"
              data-testid="delete-btn"
              name="delete-btn"
              onClick={ (event) => handleClick(expense.id, event) }
            >
              Excluir
            </button>
          </td>
        </tr>
      ))
    );
  }  
  
  
  const { expenses } = props;
  console.log(expenses);
  return (
    <table>
    <thead>
      <tr>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </tr>
    </thead>
    <tbody>
      {fillTableRows()}
    </tbody>
  </table>

  )

} 

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => (
  {
    globalDeleteExpense: (filteredExpenses) => {
      dispatch(deleteExpense(filteredExpenses));
    },
    globalGetExpense: (getExpenseDetails) => {
      dispatch(getExpense(getExpenseDetails));
    },
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(Table);
import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { saveExpense, editExpense } from '../actions';

function Form(props) {
  const [expense, setExpense] = useState({})
  

  useEffect(() => {
    const initialExpense = {
      id: 0,
      value: 0,
      description: '',
      currency: 'BRL',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    setExpense(initialExpense)
  },[])

  // useEffect((prevProps) => {
  //   const { expenseToEdit } = props;
  //   if (expenseToEdit !== prevProps.expenseToEdit) {
  //     getExpenseDetailsToEdit();
  //   }
  // },[])

  const getExpenseDetailsToEdit = () => {
    const { expenseToEdit } = props;
    const { value, description, currency, method, tag } = expenseToEdit;
    setExpense({...expense, 
      value,
      description,
      currency,
      method,
      tag,
    });
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setExpense({...expense,
      [name]: value
    });
  }


  const changeButtonName = () => {
    const { expenseToEdit = {} } = props;
    let btnName = 'Adicionar despesa';
    if (Object.keys(expenseToEdit).length) {
      btnName = 'Editar despesa';
    }
    return btnName;
  }

  const handleClick = (e) => {
    const { id, value, description, currency, method, tag } = expense;
    console.log(currency, value, description, method, tag);
    const {
      expenses,
      expenseToEdit,
      dispatchSaveExpense,
      dispatchEditExpense,
    } = props;
    const { name } = e.target;
    if (name === 'Adicionar despesa') {
      const expenseDetailed = {
        id,
        value,
        description,
        currency,
        method,
        tag,
      };
      dispatchSaveExpense(expenseDetailed);
      setExpense({...expense,
        id: id + 1,
        value: '',
        description: '',
      });
    } else {
      const expenseDetailed = {
        id: expenseToEdit.id,
        value,
        description,
        currency,
        method,
        tag,
      };
      const editedExpenses = expenses.map((expense) => {
        if (expense.id === expenseToEdit.id) {
          return expenseDetailed;
        }
        return expense;
      });
      console.log('edit button');
      dispatchEditExpense(editedExpenses);
    }
  }

  console.log(expense)
  return (
    <div>
      <form>
          <label htmlFor="value">
            Valor
            <input name="value" type="text" onChange={ (e) => handleChange(e) }/>
          </label>
          <label htmlFor="description">
            Descrição
            <input name="description" onChange={ (e) => handleChange(e) }/>
          </label>
          <label htmlFor="currency">
            Moeda
            <select name="currency" onChange={ (e) => handleChange(e) }>
              <option value="BRL">BRL</option>
              <option value="USD">USD</option>
            </select>
          </label>
          <label htmlFor="payment-option">
            Método de pagamento
            <select name="payment-option" onChange={ (e) => handleChange(e) }>
              <option value="cash">Dinheiro</option>
              <option value="c_credit">Cartão de crédito</option>
              <option value="c_debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" onChange={ (e) => handleChange(e) }>
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="healthy">Saúde</option>
            </select>
          </label>
        </form>
        <button type="button" onClick={ (e) => handleClick(e) }>
        { changeButtonName() }
        </button>
      </div> 
    )
}

const mapStateToProps = (state) => ({
  expenseToEdit: state.wallet.setExpenses,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveExpense: (expenseDetails) => dispatch(saveExpense(expenseDetails)),
  dispatchEditExpense: (editedExpenses) => dispatch(editExpense(editedExpenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveEmail } from '../actions';

function Login(props){
  const [disabled, setDisabled] = useState(true)
  const [user, setUser] = useState({})

  const validateLogin = (user) => {
    const regexEmail = new RegExp(/^[\S.]+@[a-z]+.\w{2,3}$/g).test(user.email);
    const regexPass = new RegExp(/[0-9a-zA-Z$*&@#]{6}/).test(user.password);
    if (regexEmail && regexPass) {
      console.log(user);
      setDisabled(false)
    } else {
      console.log(user);
      setDisabled(true)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({...user,
      [name]: value,
    });
    validateLogin(user);
  };

  return (
    <div>
      <form>
        <label
          htmlFor="email"
        >
          E-mail:
          <input
            data-testid="email-input"
            type="email"
            name="email"
            id="email-input"
            onChange={ (e) => handleChange(e) }
            required
          />
        </label>
        <label
          htmlFor="password"
        >
          Senha:
          <input
            data-testid="password-input"
            type="password"
            name="password"
            id="password-input"
            onChange={ (e) => handleChange(e) }
            required
          />
        </label>
        <Link to="/wallet">
          <button
            type="button"
            id="login-button"
            onClick={ () => props.addEmail(user.email) }
            disabled={ disabled }
          >
            Entrar
          </button>
        </Link>
      </form>

    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(saveEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
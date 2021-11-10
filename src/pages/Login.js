import React, {useState} from 'react';

function Login(){
  const [disabled, setDisabled] = useState('true')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validateLoginInfos = () => {
    const regexEmail = new RegExp(/^[\S.]+@[a-z]+.\w{2,3}$/g).test(email);
    const regexPass = new RegExp(/[0-9a-zA-Z$*&@#]{6}/).test(password);
    if (regexEmail && regexPass) {
      setDisabled('false')
    } else {
      setDisabled('true')
    }
  }

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
            onChange={ (e) => console.log(e.target.value) }
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
            onChange={ (e) => console.log(e.target.value) }
            required
          />
        </label>
        {/* <Link to="/wallet"> */}
          <button
            type="button"
            id="login-button"
            onClick={ (e) => console.log(e.target.value) }
            disabled={ disabled }
          >
            Entrar
          </button>
        {/* </Link> */}
      </form>

    </div>  
  
  )
} 

export default Login;
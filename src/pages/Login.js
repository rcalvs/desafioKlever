import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { userLogin } from '../actions';

import { checkEmail, checkPassword } from '../utils/login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const addUser = () => {
    const user = {
      email,
      password,
    };

    dispatch(userLogin(user));
  };

  const checkLogin = () => checkEmail(email) && checkPassword(password);

  return (
    <div class="h-screen  flex justify-center items-center">
      <div className="bg-indigo-700 rounded-lg w-1/5 py-10 px-4 shadow-2xl">
      <div className="pb-6 p-0">
        <span className="mx-4 text-white font-bold border-b-2 px-2 border-opacity-50">LOGIN IN</span>
        <span className="mx-4 text-white font-bold px-2 opacity-40">REGISTER</span>
      </div>
        <label
          htmlFor="email"
          className="text-gray-300 font-bold text-sm px-2"
        >
          E-MAIL
        </label>
        <input
          className="flex rounded-md mt-2 mb-4 px-2 italic bg-indigo-500 h-10 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent"
          type="email"
          data-testid="email-input"
          placeholder="email@email.com"
          onChange={ (e) => setEmail(e.target.value) }
          />
        <label
          htmlFor="email"
          className="text-gray-300 font-bold text-sm px-2"
        >
          PASSWORD
        </label>
        <input
          className="flex rounded-md mt-2 mb-4 px-2 italic bg-indigo-500 h-10 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent"
          type="password"
          placeholder="********"
          data-testid="password-input"
          onChange={ (e) => setPassword(e.target.value) }
          />
        <button
          className="flex rounded-md bg-gray-300 w-full h-10 justify-center m-auto text-indigo-700 font-bold py-2"
          type="button"
          disabled={ !checkLogin() }
          onClick={ addUser }
        >
          <Link to="/wallet">SIGN IN</Link>
        </button>
        <hr className="opacity-20 mt-6"/>
        <span className="flex w-full justify-center text-white text-sm m-auto pt-8 opacity-20">Forgot Password?</span>
      </div>
    </div>
  );
};

export default Login;
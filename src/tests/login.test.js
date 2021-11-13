import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';

import { renderWithRouterAndStore } from './testConfig';

const EMAIL_INPUT_TEST_ID = 'email-input';
const PASSWORD_INPUT_TEST_ID = 'password-input';
const VALID_EMAIL = 'alguem@email.com';
const VALID_PASSWORD = '123456';

afterEach(() => jest.clearAllMocks());

describe('Página inicial de login com os seguintes campos e características:', () => {
  test('A rota deve ser \'/\'', () => {
    const { history } = renderWithRouterAndStore(<App />, '/');
    expect(history.location.pathname).toBe('/');
  });

  test('Local para que o usuário insira seu email e senha', () => {
    renderWithRouterAndStore(<App />, '/');
    const email = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const senha = screen.getByTestId(PASSWORD_INPUT_TEST_ID);

    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
  });

  test('Um botão com o texto \'SIGN IN\'', () => {
    renderWithRouterAndStore(<App />, '/');

    const button = screen.getByText(/SIGN IN/i);
    expect(button).toBeInTheDocument();
  });
});

describe('Verificações nos campos de email, senha e botão:', () => {
  test('O botão de "SIGN IN" está desabilitado ao entrar na página', () => {
    renderWithRouterAndStore(<App />, '/');

    const button = screen.getByText(/SIGN IN/i);
    expect(button).toBeDisabled();
  });

  test('O botão de "SIGN IN" está desabilitado quando um email inválido é digitado', () => {
    renderWithRouterAndStore(<App />, '/');

    const email = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const senha = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const button = screen.getByText(/SIGN IN/i);

    userEvent.type(email, 'email');
    userEvent.type(senha, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, 'email@com@');
    userEvent.type(senha, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, 'emailcom@');
    userEvent.type(senha, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, 'alguem@email.');
    userEvent.type(senha, VALID_PASSWORD);
    expect(button).toBeDisabled();
  });

  test('O botão de "SIGN IN" está habilitado quando um email e uma senha válidos são passados', () => {
    renderWithRouterAndStore(<App />, '/');

    const email = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const senha = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const button = screen.getByText(/SIGN IN/i);

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(senha, VALID_PASSWORD);
    expect(button).toBeEnabled();
  });
});
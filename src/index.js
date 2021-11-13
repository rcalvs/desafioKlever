import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store';
// Devido a conflito coma  API, o MirajeJS que emulava um banco de dados foi removido
// import { makeServer } from "./server"

// if (process.env.NODE_ENV === "development") {
//   makeServer({ environment: "development" })
// }

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

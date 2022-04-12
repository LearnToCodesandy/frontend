import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TodosProvider} from "./context/TodosContext";
import {UserProvider} from "./context/UserContext";

ReactDOM.render(
  <UserProvider>
    <TodosProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodosProvider>
  </UserProvider>,
  document.getElementById('root')
);

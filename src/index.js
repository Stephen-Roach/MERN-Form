import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

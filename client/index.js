import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { combineReducers } from 'redux';
import store from './store';
import { Provider } from 'react-redux';

//make sure to add provider once redux is implemented
render(
    <App />,
  document.getElementById('root')
);

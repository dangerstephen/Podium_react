import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar/index.js';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

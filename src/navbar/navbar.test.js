import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
});

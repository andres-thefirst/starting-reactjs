import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Calculator from './Calculator';
import './index.css';

ReactDOM.render(
  <div>
    <Calculator>
      <Button increment="1"/>
    </Calculator>
  </div>,
  document.getElementById('root')
);

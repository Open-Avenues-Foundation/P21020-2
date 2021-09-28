import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BodyContent from '../src/components/BodyContent'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <BodyContent />
  </React.StrictMode>,
  document.getElementById('root')
);


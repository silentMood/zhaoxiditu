import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Fastclick from './utils/fastclick_fixed';
Fastclick.attach(document.body);
ReactDOM.render(<App />, document.getElementById('app'));

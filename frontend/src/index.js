import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Fastclick from '@innotechx/fastclick';
Fastclick.attach(document.body);
ReactDOM.render(<App />, document.getElementById('app'));
serviceWorker.unregister();

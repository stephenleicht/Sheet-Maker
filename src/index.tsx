import 'reflect-metadata';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './interface/App';
import registerServiceWorker from './interface/registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

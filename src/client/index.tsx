import 'reflect-metadata';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TestApp from './components/TestApp';

ReactDOM.render(
  <TestApp />,
  document.getElementById('root') as HTMLElement
);

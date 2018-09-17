import 'reflect-metadata';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

function handleClick() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tabID = tabs[0].id
    if(!tabID) {
      return;
    }

    chrome.tabs.executeScript(
      tabID,
      { file: 'inject.js' });
  });
}

ReactDOM.render(
  <div>
    <button onClick={handleClick}>Click Test</button>
  </div>,
  document.getElementById('root') as HTMLElement
);

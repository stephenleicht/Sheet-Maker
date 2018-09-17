import 'reflect-metadata';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PlayApp from './components/PlayApp';

let mount = document.getElementById('d20plus1');

if (!mount) {
    mount = document.createElement('div');
    mount.id = 'd20plus1';
    document.body.appendChild(mount);
}

ReactDOM.render(<PlayApp />, mount);

import * as React from 'react';
import * as styles from './App.css';

import CharacterSheet from './CharacterSheet';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <CharacterSheet />
        </p>
      </div>
    );
  }
}

export default App;

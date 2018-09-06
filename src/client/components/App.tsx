import * as React from 'react';

import CharacterSheet from './CharacterSheet';

import Pane from './Pane';
import Menu from './Menu';
import * as styles from './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>GAME</h1>
        <Pane>
          <div className={styles.menu}>
            <Menu></Menu>
          </div>
        </Pane>
        {/* <CharacterSheet /> */}
      </div>
    );
  }
}

export default App;

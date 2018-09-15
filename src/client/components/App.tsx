import * as React from 'react';

import CharacterSheet from './CharacterSheet';

import Pane from './Pane';
import Menu from './Menu';
import GreebleBox from './GreebleBox';

import * as styles from './App.css';

interface AppState {
  smallText: boolean,
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    smallText: true,
  }

  render() {
    const smallText = this.state.smallText;

    return (
      <div className={styles.container}>
        <button onClick={() => this.setState({smallText: !smallText})}>Change</button>
        <GreebleBox size={25}>
          {smallText ? 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim.' :
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non elit eget arcu tempor semper in vitae tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sed.'}
        </GreebleBox>
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

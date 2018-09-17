import * as React from 'react';

import StarfinderCharacter from 'engines/starfinder/StarfinderCharacter';
import { PlayState, computePlayStateEffects } from 'engines/common/PlayState';

import Pane from '../Pane';
import PlayMenu from '../PlayMenu'
import GreebleBox from '../GreebleBox';

import { getCharacterByID } from './TestAppActions';

import * as styles from './TestApp.css';

interface TestAppState {
  smallText: boolean,
  character: StarfinderCharacter | null
  playState: PlayState | null
}

class TestApp extends React.Component<{}, TestAppState> {
  state: TestAppState = {
    smallText: true,
    character: null,
    playState: null,
  }

  async componentDidMount() {
    const character = await getCharacterByID('5a079da72552750c22ac7906');

    this.setState({
      character,
      playState: {
        effects: computePlayStateEffects(character)
      }
    });
  }


  render() {
    const { smallText, playState, character } = this.state;

    return (
      <div className={styles.container}>
        <button onClick={() => this.setState({ smallText: !smallText })}>Change</button>
        <GreebleBox cutSize={50} corners={{ tr: true, br: false, tl: false, bl: true }} strokeWidth={3}>
          <div style={{ padding: '8px' }}>
            {smallText ?
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim.' :
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non elit eget arcu tempor semper in vitae tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sed.'}
          </div>
        </GreebleBox>
        <Pane>
          <div className={styles.menu}>
            {playState && character &&
              <PlayMenu playState={playState} character={character} />
            }
          </div>
        </Pane>
      </div>
    );
  }
}

export default TestApp;

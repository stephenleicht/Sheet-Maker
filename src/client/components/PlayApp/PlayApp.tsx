import { PlayState, computePlayStateEffects } from 'engines/common/PlayState';
import StarfinderCharacter from 'engines/starfinder/StarfinderCharacter';
import * as React from 'react';
import Pane from '../Pane';
import PlayMenu from '../PlayMenu';
import { getCharacterByID } from './PlayAppActions';

import * as styles from './PlayApp.css';

interface PlayAppState {
    character: StarfinderCharacter | null
    playState: PlayState | null
}


export default class PlayApp extends React.Component<{}, PlayAppState> {
    state = {
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
        const { character, playState } = this.state;
        return (
            <Pane>
                <div className={styles.menuWrapper}>
                    {character && playState && (
                        <PlayMenu character={character} playState={playState} />
                    )}
                </div>
            </Pane>
        )
    }
}

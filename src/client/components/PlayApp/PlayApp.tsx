import { PlayCharacter, createPlayCharacter } from 'engines/common/play/PlayCharacter';
import StarfinderCharacter from 'engines/starfinder/StarfinderCharacter';
import * as React from 'react';
import Pane from '../Pane';
import PlayMenu from '../PlayMenu';
import * as styles from './PlayApp.css';
import { getCharacterByID } from './PlayAppActions';


interface PlayAppState {
    character: PlayCharacter<StarfinderCharacter> | null
}


export default class PlayApp extends React.Component<{}, PlayAppState> {
    state = {
        character: null
    }

    async componentDidMount() {
        const character = await getCharacterByID('5ba0509ac4e88b0c1ffc4de4');

        this.setState({
            character: createPlayCharacter(character)
        });
    }

    render() {
        const { character } = this.state;
        return (
            <Pane>
                <div className={styles.menuWrapper}>
                    {character && (
                        <PlayMenu character={character} />
                    )}
                </div>
            </Pane>
        )
    }
}

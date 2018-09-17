import * as React from 'react';
import { PlayState } from 'engines/common/PlayState';
import StarfinderCharacter from 'engines/starfinder/StarfinderCharacter';
import GreebleBox from '../../GreebleBox';

import * as styles from './CharacterTab.css';
import { rollDie } from '../../../play/playActions';

export interface CharacterTabProps {
    playState: PlayState,
    character: StarfinderCharacter
}

export default class CharacterTab extends React.Component<CharacterTabProps> {
    handleRollClick = () => {
        const { playState } = this.props;
        rollDie(`1d20+${playState.effects['abilityScore.strength'].value}`)
    }

    render() {
        const { playState, character } = this.props;

        return (
            <div className={styles.wrapper}>
                <h5>{character.name}</h5>
                <section>
                    <h6>Abilities</h6>
                    <div>
                        <button onClick={this.handleRollClick}>Roll</button>
                        <GreebleBox cutSize={15} corners={{ br: true }} strokeWidth={2}>
                            <span style={{ padding: '3px 5px' }}>Str</span>
                        </GreebleBox>
                        {playState.effects['abilityScore.strength'].value}
                    </div>
                </section>
            </div>
        );
    }
}
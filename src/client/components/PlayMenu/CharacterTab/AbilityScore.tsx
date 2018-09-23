import Character from 'engines/common/Character';
import { PlayCharacter } from 'engines/common/play/PlayCharacter';
import * as React from 'react';
import GreebleBox from '../../GreebleBox';
import { calculateAbilityScoreModifier } from 'engines/common/Character/AbilityScores';

export interface AbilityScoreProps {
    character: PlayCharacter<Character>
    ability: keyof Character['abilityScore'],
    onRoll: (ability: keyof Character['abilityScore'], modifier: number) => void
}

export default class AbilityScore extends React.Component<AbilityScoreProps> {
    render() {
        const { character, ability, onRoll } = this.props;
        const modifier = calculateAbilityScoreModifier(character.abilityScore[ability]);

        return (
            <div>
                <button onClick={() => onRoll(ability, modifier)}>Roll</button>
                <GreebleBox cutSize={10} corners={{ br: true }}>
                    <span style={{ padding: '3px 5px' }}>{ability.toUpperCase()}</span>
                </GreebleBox>
                {character.abilityScore[ability]} {modifier !== 0 && `(${modifier > 0 ? '+': ''}${modifier})`}
            </div>
        )
    }
}
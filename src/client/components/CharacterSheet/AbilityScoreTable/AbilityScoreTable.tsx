import * as React from 'react';

import * as styles from './AbilityScoreTable.css';
import StarfinderCharacter from '../../../../engines/starfinder/StarfinderCharacter';
import {EffectKey} from '../../../../engines/common/EffectKey';

import AbilityScoreTableRow from './AbilityScoreTableRow';

export interface AbilityScoreTableProps {
    character: StarfinderCharacter,
}

export default function AbilityScoreTable({character}: AbilityScoreTableProps) {
    return (
        <table className={styles.wrapper}>
        <thead>
            <tr>
                <td/>
                <td>Score</td>
                <td>Modifier</td>
                <td>Upgraded Score</td>
                <td>Upgraded Modifier</td>
            </tr>
        </thead>
        <tbody>
            <AbilityScoreTableRow 
                abbreviation="STR"
                label="Strength"
                score={character.strength}
                scoreBonus={character.getEffectsForKey(EffectKey.Strength)}
                modifier={character.strengthModifier}
            />
            <AbilityScoreTableRow 
                abbreviation="DEX"
                label="Dexterity"
                scoreBonus={character.getEffectsForKey(EffectKey.Dexterity)}
                score={character.dexterity}
                modifier={character.dexterityModifier}
            />
            <AbilityScoreTableRow 
                abbreviation="CON"
                label="Constitution"
                score={character.constitution}
                scoreBonus={character.getEffectsForKey(EffectKey.Constitution)}
                modifier={character.constitutionModifier}
            />
            <AbilityScoreTableRow 
                abbreviation="INT"
                label="Intelligence"
                score={character.intelligence}
                scoreBonus={character.getEffectsForKey(EffectKey.Intelligence)}
                modifier={character.intelligenceModifier}
            />
            <AbilityScoreTableRow 
                abbreviation="WIS"
                label="Wisdom"
                scoreBonus={character.getEffectsForKey(EffectKey.Wisdom)}
                score={character.wisdom}
                modifier={character.wisdomhModifier}
            />
            <AbilityScoreTableRow 
                abbreviation="CHA"
                label="Charisma"
                scoreBonus={character.getEffectsForKey(EffectKey.Charisma)}
                score={character.charisma}
                modifier={character.charismaModifier}
            />
        </tbody>
    </table>
    )
}
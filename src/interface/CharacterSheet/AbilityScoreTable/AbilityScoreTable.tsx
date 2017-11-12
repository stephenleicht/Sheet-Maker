import * as React from 'react';

import * as styles from './AbilityScoreTable.css';
import StarfinderCharacter from '../../../engines/starfinder/StarfinderCharacter';

import AbilityScoreTableRow from './AbilityScoreTableRow';

export interface AbilityScoreTableProps {
    value: StarfinderCharacter,
}

export default function AbilityScoreTable({value}: AbilityScoreTableProps) {
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
                score={value.strength}
                modifier={value.strengthModifier}
            />
            <AbilityScoreTableRow 
                abbreviation="DEX"
                label="Dexterity"
                score={value.dexterity}
                modifier={value.dexterityhModifier}
            />
            <AbilityScoreTableRow 
                abbreviation="CON"
                label="Constitution"
                score={value.constitution}
                modifier={value.constitutionModifier}
            />
            <AbilityScoreTableRow 
                abbreviation="INT"
                label="Intelligence"
                score={value.intelligence}
                modifier={value.intelligenceModifier}
            />
            <AbilityScoreTableRow 
                abbreviation="WIS"
                label="Wisdom"
                score={value.wisdom}
                modifier={value.wisdomhModifier}
            />
            <AbilityScoreTableRow 
                abbreviation="CHA"
                label="Charisma"
                score={value.charisma}
                modifier={value.charismaModifier}
            />
        </tbody>
    </table>
    )
}
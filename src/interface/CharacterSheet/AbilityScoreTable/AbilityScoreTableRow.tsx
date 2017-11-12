import * as React from 'react';

import AbilityScoreLabel from './AbilityScoreLabel';

import * as styles from './AbilityScoreTableRow.css';

export interface AbilityScoreTableRowProps {
    abbreviation: string;
    label: string;
    score: number,
    modifier: number,
}

export default function AbilityScoreTableRow({ score, modifier, abbreviation, label }: AbilityScoreTableRowProps) {
    return (
        <tr>
            <td className={styles.labelCell}>
                <AbilityScoreLabel abbreviation={abbreviation} label={label} />
            </td>
            <td className={styles.infoCell}>
                {score}
            </td>
            <td className={styles.infoCell}>
                {modifier > 0 ? '+' : ''}{modifier}
            </td>
        </tr>
    );
}
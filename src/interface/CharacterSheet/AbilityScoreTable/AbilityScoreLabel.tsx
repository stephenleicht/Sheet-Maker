import * as React from 'react';

import * as styles from './AbilityScoreLabel.css';

export interface AbilityScoreLabelProps {
    abbreviation: string;
    label: string;
}

export default function AbilityScoreLabel({abbreviation, label}: AbilityScoreLabelProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.abbreviation}>
                {abbreviation}
            </div>
            <div className={styles.label}>
                {label}
            </div>
        </div>
    );
}
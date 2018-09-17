import * as React from 'react';

import * as styles from './Pane.css';

interface PaneProps {
    children: React.ReactNode
}

export default function ({children}: PaneProps) {
    return (
        <div className={styles.pane}>
            {children}
        </div>
    )
}
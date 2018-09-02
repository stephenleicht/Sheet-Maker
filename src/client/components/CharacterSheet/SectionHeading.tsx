import * as React from 'react';

import * as styles from './SectionHeading.css';

const SectionHeading: React.StatelessComponent = ({ children }) => {
    return (
        <div className={styles.sectionHeading}>
            {children}
        </div>
    )
}

export default SectionHeading;
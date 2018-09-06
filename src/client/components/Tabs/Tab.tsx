import * as React from 'react';

import { TabsContext } from './Tabs';

import * as styles from './Tab.css';

export interface TabProps {
    name: string,
    children: React.ReactNode
}

export default function Tab({ children, name }: TabProps) {
    return (
        <TabsContext.Consumer>
            {({ activeTab, setActiveTab }) => {
                const isActive = activeTab === name;

                const handler = () => {
                    setActiveTab(isActive ? undefined : name)
                }

                return (
                    <div
                        className={isActive ? styles.active : ''}
                        onClick={handler}
                    >
                        {children}
                    </div>
                )
            }}
        </TabsContext.Consumer>
    )
}
import * as React from 'react';

import { TabsContext } from './Tabs';

export interface TabBodyProps {
    name: string,
    children: React.ReactNode
}

export default function TabBody({children, name}: TabBodyProps) {
    return (
        <TabsContext.Consumer>
            {({activeTab}) => {
                const isActive = activeTab && activeTab === name;
                return ( !isActive ? null : (
                    <>
                         {children}
                    </>
                ))
            }}
        </TabsContext.Consumer>
    )
}
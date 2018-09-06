import * as React from 'react';

export interface TabsContextType {
    activeTab?: string,
    setActiveTab: (name?: string) => void,
}

export interface TabsProps {
    children: React.ReactNode,
    activeTab?: string,
    onTabChange: (newActiveTab?: string) => void,
}

export const TabsContext = React.createContext<TabsContextType>({
    activeTab: undefined,
    setActiveTab: () => { },
})

export default function Tabs({ children, activeTab, onTabChange }: TabsProps) {
    return (
        <TabsContext.Provider value={{
            activeTab,
            setActiveTab: onTabChange,
        }}>
            {children}
        </TabsContext.Provider>
    )
}
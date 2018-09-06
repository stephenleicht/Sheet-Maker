import * as React from 'react';

import * as styles from './Menu.css';

import { Tabs, Tab, TabBody } from '../Tabs';

interface MenuState {
    activeTab?: string,
}


export default class Menu extends React.Component<{}, MenuState> {
    constructor(props: any) {
        super(props);

        this.state = {
            activeTab: 'tab1'
        }
    }

    onTabChange = (newActiveTab?: string) => {
        this.setState({
            activeTab: newActiveTab,
        })
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <Tabs activeTab={this.state.activeTab} onTabChange={this.onTabChange}>
                    <div className={styles.content}>
                        <TabBody name="character">
                            <h4>Tab 1</h4>
                        </TabBody>
                        <TabBody name="skills">
                            <h4>Tab 2</h4>
                        </TabBody>
                    </div>
                    <div className={styles.tabBar}>
                        <Tab name="character">
                            Character
                        </Tab>
                        <Tab name="skills">
                            Skills
                        </Tab>
                    </div >
                </Tabs>
            </div>
        )
    }
}
import * as React from 'react';

import * as styles from './Menu.css';

import { Tabs, Tab, TabBody } from '../Tabs';
import GreebleBox from '../GreebleBox';

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
                    <GreebleBox size={15}>
                        <TabBody name="character">
                            <h4>Tab 1</h4>
                        </TabBody>
                        <TabBody name="skills">
                            <h4>Tab 2 kjalsdflkjas dflkajsdf lskjsdf lsdjf lksfjlsakjf sadf</h4>
                        </TabBody>
                    </GreebleBox>
                    <GreebleBox>
                        <Tab name="character">
                            Character
                        </Tab>
                        <Tab name="skills">
                            Skills
                        </Tab>
                    </GreebleBox>
                </Tabs>
            </div>
        )
    }
}
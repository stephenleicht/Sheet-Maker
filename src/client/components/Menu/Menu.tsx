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
                    {this.state.activeTab &&
                        <div className={styles.contentWrapper}>
                            <GreebleBox cutSize={20} corners={{ tl: true, bl: true, br: true }}>
                                <TabBody name="character">
                                    <div style={{width: '200px', height: '300px', padding: '16px'}}>
                                        <strong>Character</strong>
                                    </div>
                                </TabBody>
                                <TabBody name="skills">
                                    <div>
                                        <strong>Tab 2 kjalsdflkjas dflkajsdf lskjsdf lsdjf lksfjlsakjf sadf</strong>
                                    </div>
                                </TabBody>
                            </GreebleBox>
                        </div>
                    }
                    <GreebleBox cutSize={16} corners={{ bl: true }}>
                        <Tab name="character">
                            Character
                        </Tab>
                        <Tab name="skills">
                            Skills
                        </Tab>
                        <Tab name="abilities">
                            Abilities
                        </Tab>
                        <Tab name="equipment">
                            Equipment
                        </Tab>
                        <Tab name="spells">
                            Spells
                        </Tab>
                        <Tab name="etc">
                            Etc
                        </Tab>
                    </GreebleBox>
                </Tabs>
            </div>
        )
    }
}
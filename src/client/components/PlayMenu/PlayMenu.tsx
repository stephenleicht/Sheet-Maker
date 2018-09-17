import * as React from 'react';

import { PlayState } from 'engines/common/PlayState';
import StarfinderCharacter from 'engines/starfinder/StarfinderCharacter';

import { Tabs, Tab, TabBody } from '../Tabs';
import GreebleBox from '../GreebleBox';
import CharacterTab from './CharacterTab';

import * as styles from './PlayMenu.css';


interface MenuState {
    activeTab?: string,
}

export interface MenuProps {
    playState: PlayState,
    character: StarfinderCharacter
}


export default class PlayMenu extends React.Component<MenuProps, MenuState> {
    constructor(props: any) {
        super(props);

        this.state = {
            activeTab: undefined
        }
    }

    onTabChange = (newActiveTab?: string) => {
        this.setState({
            activeTab: newActiveTab,
        })
    }

    render() {
        const { playState, character } = this.props;
        return (
            <div className={styles.wrapper}>
                <Tabs activeTab={this.state.activeTab} onTabChange={this.onTabChange}>
                    {this.state.activeTab &&
                        <div className={styles.contentWrapper}>
                            <GreebleBox cutSize={20} corners={{ tl: true, bl: true, br: true }}>
                                <TabBody name="character">
                                    <CharacterTab playState={playState} character={character}/>
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
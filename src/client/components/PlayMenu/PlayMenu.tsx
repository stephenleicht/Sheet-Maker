import { PlayCharacter } from 'engines/common/play/PlayCharacter';
import StarfinderCharacter from 'engines/starfinder/StarfinderCharacter';
import * as React from 'react';
import GreebleBox from '../GreebleBox';
import { Tab, TabBody, Tabs } from '../Tabs';
import CharacterTab from './CharacterTab';
import * as styles from './PlayMenu.css';
import SkillsTab from './SkillsTab/SkillsTab';


interface MenuState {
    activeTab?: string,
}

export interface MenuProps {
    character: PlayCharacter<StarfinderCharacter>
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
        const { character } = this.props;
        return (
            <div className={styles.wrapper}>
                <Tabs activeTab={this.state.activeTab} onTabChange={this.onTabChange}>
                    {this.state.activeTab &&
                        <div className={styles.contentWrapper}>
                            <GreebleBox cutSize={20} corners={{ tl: true, bl: true, br: true }}>
                                <TabBody name="character">
                                    <CharacterTab character={character}/>
                                </TabBody>
                                <TabBody name="skills">
                                    <SkillsTab character={character} />
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
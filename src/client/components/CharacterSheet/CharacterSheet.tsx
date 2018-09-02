import * as React from 'react';

import StarfinderCharacter from '../../../engines/starfinder/StarfinderCharacter';

import { getCharacterByID } from './CharacterSheetActions';

import SectionHeading from './SectionHeading';
import AbilityScoreTable from './AbilityScoreTable';
import SkillsTable from './SkillsTable';
// import * as styles from './CharacterSheet.css';


export interface CharacterSheetState {
    value?: StarfinderCharacter,
}

export default class CharacterSheet extends React.Component<{}, CharacterSheetState> {
    constructor(opts: {}) {
        super(opts);

        this.state = {
            value: undefined
        };
    }

    componentDidMount() {
        this.fetchCharacterSheet();
    }

    async fetchCharacterSheet() {
        const character = await getCharacterByID('5a079da72552750c22ac7906');

        this.setState({
            value: character
        });
    }

    componentDidUpdate() {
        if(this.state.value && !this.state.value.state) {
            this.state.value.computeCharacterState();
            // Set state because we are mutating the character object to keep it encapsulated
            this.setState({
                value: this.state.value
            })
        }
    }

    render() {
        const { value } = this.state;

        if (!value) {
            return null;
        }

        return (
            <div>
                <SectionHeading>
                    General
                </SectionHeading>
                <div>
                    Name
                </div>
                <div>
                    {value.name}
                </div>
                <SectionHeading>
                    Ability Scores
                </SectionHeading>
                <AbilityScoreTable character={value} />
                <SectionHeading>
                    Skills
                </SectionHeading>
                <SkillsTable 
                    character={value}
                />
            </div>
        )
    }
}
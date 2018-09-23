import { PlayCharacter } from 'engines/common/play/PlayCharacter';
import Roll from 'engines/common/Roll';
import { SkillName } from 'engines/starfinder/skills/StarfinderSkillIndex';
import StarfinderCharacter from 'engines/starfinder/StarfinderCharacter';
import * as React from 'react';
import { rollDie } from '../../../play/playActions';
import * as styles from './SkillsTab.css';

export interface SkillsTabProps {
    character: PlayCharacter<StarfinderCharacter>
}

export default class SkillsTab extends React.Component<SkillsTabProps> {
    onRoll = (skill: SkillName) => {
        // const modifier = 0;
        const modifier = this.props.character.getSkillCheckModifier(skill)

        const roll = new Roll(1, 20, modifier);
        rollDie(roll.toString())
    }

    render() {
        const { character } = this.props;

        const usableSkills = character.getUsableSkills();

        return (
            <div className={styles.wrapper}>
                <h5>Skills</h5>
                <section>
                    <div>
                        {usableSkills
                            .map((key) => {
                                const modifier = character.getSkillCheckModifier(key);
                                return (
                                    <div key={key} onClick={() => this.onRoll(key)}>
                                        <input type="checkbox" readOnly checked={character.skills[key].isClassSkill} />
                                        {key}({character.getSkillInfo(key).abilityScore}) {modifier > 0 ? `+${modifier}` : modifier}
                                    </div>
                                );
                            })}

                    </div>
                </section>
            </div>
        );
    }
}
import { PlayCharacter } from 'engines/common/play/PlayCharacter';
import Roll from 'engines/common/Roll';
import StarfinderCharacter from 'engines/starfinder/StarfinderCharacter';
import { ModelMeta, ModelType } from 'ghoti';
import * as React from 'react';
import { rollDie } from '../../../play/playActions';
import * as styles from './SkillsTab.css';
import StarfinderSkills from 'engines/starfinder/skills/StarfinderSkills';
import { SkillIndex } from 'engines/starfinder/skills/SkillInfo';



export interface SkillsTabProps {
    character: PlayCharacter<StarfinderCharacter>
}

export default class SkillsTab extends React.Component<SkillsTabProps> {
    onRoll = (ability: keyof StarfinderCharacter['skills'], modifier: number) => {
        const roll = new Roll(1, 20, modifier);
        rollDie(roll.toString())
    }

    render() {
        const { character } = this.props;

        const skillsMeta: ModelMeta = (StarfinderCharacter as ModelType<any>)
            .modelMeta.fields.skills.type.modelMeta;

        return (
            <div className={styles.wrapper}>
                <h5>Skills</h5>
                <section>
                    <div>
                        {Object.keys(skillsMeta.fields)
                            .map((key) => {
                                const skill: keyof SkillIndex = key as keyof SkillIndex
                                return (<div key={key}>
                                    <input type="checkbox" readOnly checked={character.skills[skill].isClassSkill} />
                                    {key}({character.skills.getInfo(skill).abilityScore})
                                </div>
                                );
                            })}

                    </div>
                </section>
            </div>
        );
    }
}
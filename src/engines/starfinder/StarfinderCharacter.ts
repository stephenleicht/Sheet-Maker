import { Effect } from 'engines/common/Effect';
import { SkillInfo } from 'engines/common/skills/SkillInfo';
import SkillState from 'engines/common/skills/SkillState';
import { Field, Model } from 'ghoti';
import Character from '../common/Character';
import StarfinderClasses from './classes/StarfinderClasses';
import StarfinderEquipment from './equipment/StarfinderEquipment';
import Feat from './feats/Feat';
import { StarfinderRace, StarfinderRaceTaggedUnion } from './races/StarfinderRace';
import skillIndex, { SkillName } from './skills/StarfinderSkillIndex';
import StarfinderSkills from './skills/StarfinderSkills';


@Model()
export default class StarfinderCharacter extends Character<StarfinderSkills> {
    @Field()
    public staminaPoints: number;

    @Field()
    public classes: StarfinderClasses

    @Field()
    public skills: StarfinderSkills

    @Field({
        type: StarfinderRaceTaggedUnion
    })
    public race: StarfinderRace;

    @Field({
        type: Field.arrayOf(Feat)
    })
    public feats: Feat[]

    @Field()
    public equipment: StarfinderEquipment;

    public getActiveEffects(): Effect[] {
        const baseEffects = super.getActiveEffects();

        return [
            ...baseEffects,
            ...this.race.getEffects(),
            ...this.classes.getEffects(),
        ]
    }

    public getSkillInfo(skillName: SkillName): SkillInfo {
        return skillIndex[skillName];
    }

    public getSkillState(skillName: SkillName): SkillState {
        return this.skills[skillName];
    }

    public getUsableSkills(): Array<SkillName> {
        return Object.entries(skillIndex)
            .filter(([name, info]) => {
                const skillName = name as SkillName;
                if (!info.trainedOnly) {
                    return true;
                }

                return this.skills[skillName].rank > 0;
            })
            .map(([name]) => name as SkillName)
    }
}

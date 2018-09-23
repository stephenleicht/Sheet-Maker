import { Field, Model } from 'ghoti';
import SkillState from "../../common/skills/SkillState";
import { StarfinderSkillIndex } from './StarfinderSkillIndex';

export enum StarfinderSkillName {
    Acrobatics = 'acrobatics',
    Other = 'other'
}

@Model()
export default class StarfinderSkills implements  StarfinderSkillIndex<SkillState> {
    @Field()
    acrobatics: SkillState = new SkillState();

    @Field()
    other: SkillState = new SkillState();
}
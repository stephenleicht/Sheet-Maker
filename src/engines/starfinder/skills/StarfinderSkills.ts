import {omit} from 'lodash'

import {Model, Field} from 'ghoti';
import SkillState from "./SkillState";

import SkillInfoIndex, {SkillInfo, SkillIndex} from './SkillInfo';

@Model()
export default class StarfinderSkills {
    @Field()
    acrobatics: SkillState = new SkillState();

    @Field()
    other: SkillState = new SkillState();

    getInfo(skill: keyof SkillIndex): SkillInfo {
        return SkillInfoIndex[skill];
    }
}
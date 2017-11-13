import {Model, Field} from 'ghoti';
import SkillState from "./SkillState";

import AcrobaticsDescriptor from './descriptors/AcrobaticsDescriptor';

@Model()
export default class StarfinderSkills {
    @Field()
    acrobatics: SkillState = new SkillState(AcrobaticsDescriptor);
}
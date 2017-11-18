import {Model, Field} from 'ghoti';
import SkillState from "./SkillState";

import AcrobaticsDescriptor from './descriptors/AcrobaticsDescriptor';
import OtherDescriptor from './descriptors/OtherDescriptor';

@Model()
export default class StarfinderSkills {
    @Field()
    acrobatics: SkillState = new SkillState(AcrobaticsDescriptor);

    @Field()
    other: SkillState = new SkillState(OtherDescriptor);
}
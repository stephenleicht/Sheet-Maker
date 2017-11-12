import SkillState from "./SkillState";

import AcrobaticsDescriptor from './descriptors/AcrobaticsDescriptor';

export default class StarfinderSkills {
    acrobatics = new SkillState(AcrobaticsDescriptor);
}
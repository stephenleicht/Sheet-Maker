import { SkillIndex } from 'engines/common/skills/SkillIndex';
import { SkillInfo } from 'engines/common/skills/SkillInfo';

export type StarfinderSkillIndex<T = SkillInfo> = SkillIndex<typeof infoIndex, T>

export type SkillName = keyof StarfinderSkillIndex;

const infoIndex = {
    acrobatics: {
        name: 'Acrobatics',
        description: "skill description",
        abilityScore: 'dex',
        trainedOnly: false,
        armorCheckPenaltyApplies: true,
    },
    other: {
        name: 'other',
        description: "skill description",
        abilityScore: 'str',
        trainedOnly: false,
        armorCheckPenaltyApplies: true,
    }
}

export default infoIndex as StarfinderSkillIndex<SkillInfo>;
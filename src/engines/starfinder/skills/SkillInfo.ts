import { AbilityScoreType } from '../../common/Character/AbilityScoreType';
import StarfinderSkills from './StarfinderSkills';

export interface SkillInfo {
    name: string,
    description: string,
    abilityScore: AbilityScoreType,
    trainedOnly: boolean,
    armorCheckPenaltyApplies: boolean,
}

export type SkillIndex = {
    [key in Exclude<keyof StarfinderSkills, 'getInfo'>]: SkillInfo
}

const infoIndex: SkillIndex  = {
    acrobatics: {
        name: 'Acrobatics',
        description: "skill description",
        abilityScore: AbilityScoreType.Dex,
        trainedOnly: false,
        armorCheckPenaltyApplies: true,
    },
    other: {
        name: 'other',
        description: "skill description",
        abilityScore: AbilityScoreType.Str,
        trainedOnly: false,
        armorCheckPenaltyApplies: true,
    }
}

export default infoIndex;
import { AbilityScoreType } from '../../../common/AbilityScoreType';

export default interface SkillDescriptor {
    key: string,
    name: string,
    description: string,
    abilityScore: AbilityScoreType,
    trainedOnly: boolean,
    armorCheckPenaltyApplies: boolean,
}
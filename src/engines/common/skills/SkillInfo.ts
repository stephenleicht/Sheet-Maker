import { AbilityType } from "../Character/AbilityScores";

export interface SkillInfo {
    name: string,
    description: string,
    abilityScore: AbilityType,
    trainedOnly: boolean,
    armorCheckPenaltyApplies: boolean,
}
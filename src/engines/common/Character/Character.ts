import { Field, Model } from 'ghoti';
import { Effect } from '../Effect';
import { SkillIndex } from '../skills/SkillIndex';
import { SkillInfo } from '../skills/SkillInfo';
import SkillState from '../skills/SkillState';
import AbilityScores, { AbilityType, calculateAbilityScoreModifier } from './AbilityScores';

@Model()
export default class Character<T extends SkillIndex<unknown, SkillState> = SkillIndex<unknown, SkillState>> {
    @Field()
    public playerName: string;
    
    @Field()
    public name: string;
    
    @Field()
    public totalHitPoints: number;

    @Field()
    public abilityScore: AbilityScores

    @Field({
        type: Field.arrayOf(String)
    })
    public languages: string[]

    public skills: T

    public getActiveEffects(): Effect[] {
        return [];
    }

    public getAbilityScoreModifier(ability: AbilityType) {
        return calculateAbilityScoreModifier(this.abilityScore[ability]);
    }

    public getSkillState(skillName: unknown): SkillState {
        return {} as SkillState;
    }

    public getSkillInfo(skillName: unknown): SkillInfo {
        return {} as SkillInfo;
    }

    public getSkillCheckModifier(skillName: unknown) {
        const skill = this.getSkillInfo(skillName);
        const state = this.getSkillState(skillName);

        if(skill.trainedOnly && state.rank === 0) {
            return -Infinity;
        }

        const abilityScoreMod = this.getAbilityScoreModifier(skill.abilityScore);

        let retVal = state.rank + state.miscMod + abilityScoreMod;

        if (state.isClassSkill && state.rank > 0) {
            retVal += 3;
        }

        //TODO: Armor check penalty when equipment is involved.

        return retVal;
    }
}
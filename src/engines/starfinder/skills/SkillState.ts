import { Model, Field } from 'ghoti';

import StarfinderCharacter from "engines/starfinder/StarfinderCharacter";

@Model()
export default class SkillState {
    @Field()
    public rank: number = 0;

    @Field()
    public classBonus: number = 0;

    @Field()
    public miscMod: number = 0;

    @Field()
    public isClassSkill: boolean = false;

    public getTotalModifier(character: StarfinderCharacter): number {
        const baseModifier = this.miscMod; // + character.getAbilityScoreModifier(this.skill.abilityScore);

        if (this.isClassSkill && this.rank > 0) {
            return baseModifier + this.rank + 3;
        }
        else if (this.rank > 0) {
            return baseModifier + this.rank;
        }
        else {
            return baseModifier;
        }
    }
}
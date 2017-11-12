import SkillDescriptor from "./descriptors/SkillDescriptor";
import StarfinderCharacter from "src/engines/starfinder/StarfinderCharacter";

export default class SkillState {
    public skill: SkillDescriptor
    public rank: number = 0;
    public classBonus: number = 0;
    public miscMod: number = 0;

    public isClassSkill: boolean = false;

    constructor(skill: SkillDescriptor) {
        this.skill = skill;
    }

    public getTotalModifier(character: StarfinderCharacter): number {
        const baseModifier = this.miscMod + character.getAbilityScoreModifier(this.skill.abilityScore);

        if(this.isClassSkill && this.rank > 0) {
            return baseModifier + this.rank + 3;
        }
        else if(this.rank > 0) {
            return baseModifier + this.rank;
        }
        else {
            return baseModifier;
        }
    }
}
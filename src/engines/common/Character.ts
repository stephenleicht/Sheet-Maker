import { Field } from 'ghoti';
import { AbilityScoreType } from './AbilityScoreType';

import calculateAbilityScoreModifier from '../../utilities/abilityScoreModifierCalculator';

export interface CharacterFields {
    playerName: string;
    name: string;
    totalHitPoints: number;
}

export default class Character implements CharacterFields {
    @Field()
    public playerName: string;
    
    @Field()
    public name: string;
    
    @Field()
    public totalHitPoints: number;

    @Field()
    public strength: number;
   
    @Field()
    public dexterity: number;
    
    @Field()
    public constitution: number;
    
    @Field()
    public intelligence: number;
    
    @Field()
    public wisdom: number;
    
    @Field()
    public charisma: number;

    public get strengthModifier() {
        return calculateAbilityScoreModifier(this.strength);
    }

    public get dexterityhModifier() {
        return calculateAbilityScoreModifier(this.dexterity);
    }

    public get constitutionModifier() {
        return calculateAbilityScoreModifier(this.constitution);
    }

    public get intelligenceModifier() {
        return calculateAbilityScoreModifier(this.intelligence);
    }

    public get wisdomhModifier() {
        return calculateAbilityScoreModifier(this.wisdom);
    }

    public get charismaModifier() {
        return calculateAbilityScoreModifier(this.charisma);
    }

    constructor(fields: CharacterFields) {
        Object.assign(this, fields);
    }

    public getAbilityScoreModifier(type: AbilityScoreType): number {
        return calculateAbilityScoreModifier(this[type]);
    }

}
import { Field, Model } from 'ghoti';
import { AbilityScoreType } from './AbilityScoreType';

import { Effect } from './Effect';
import { EffectType } from './EffectType';
import {EffectKey} from './EffectKey';

import calculateAbilityScoreModifier from '../../utilities/abilityScoreModifierCalculator';


export interface CharacterFields {
    playerName: string;
    name: string;
    totalHitPoints: number;
}

@Model()
export default class Character implements CharacterFields {
    @Field()
    public playerName: string;
    
    @Field()
    public name: string;
    
    @Field()
    public totalHitPoints: number;

    @Field()
    public baseStrength: number;
   
    @Field()
    public baseDexterity: number;
    
    @Field()
    public baseConstitution: number;
    
    @Field()
    public baseIntelligence: number;
    
    @Field()
    public baseWisdom: number;
    
    @Field()
    public baseCharisma: number;

    @Field({
        type: Field.arrayOf(String)
    })
    public languages: string[]

    // public get strengthModifier() {
    //     return calculateAbilityScoreModifier(this.strength);
    // }

    // public get dexterityModifier() {
    //     return calculateAbilityScoreModifier(this.dexterity);
    // }

    // public get constitutionModifier() {
    //     return calculateAbilityScoreModifier(this.constitution);
    // }

    // public get intelligenceModifier() {
    //     return calculateAbilityScoreModifier(this.intelligence);
    // }

    // public get wisdomhModifier() {
    //     return calculateAbilityScoreModifier(this.wisdom);
    // }

    // public get charismaModifier() {
    //     return calculateAbilityScoreModifier(this.charisma);
    // }

    // public get strength() { 
    //     return this.baseStrength + this.getEffectsForKey(EffectKey.Strength).value;
    // }

    // public get intelligence() { 
    //     return this.baseIntelligence + this.getEffectsForKey(EffectKey.Intelligence).value;
    // }

    // public get dexterity() { 
    //     return this.baseDexterity + this.getEffectsForKey(EffectKey.Dexterity).value;
    // }

    // public get constitution() { 
    //     return this.baseConstitution + this.getEffectsForKey(EffectKey.Constitution).value;
    // }

    // public get wisdom() { 
    //     return this.baseWisdom + this.getEffectsForKey(EffectKey.Wisdom).value;
    // }

    // public get charisma() { 
    //     return this.baseCharisma + this.getEffectsForKey(EffectKey.Charisma).value;
    // }

    constructor(fields: Partial<CharacterFields> = {}) {
        Object.assign(this, fields);
    }

    // public getAbilityScoreModifier(type: AbilityScoreType): number {
    //     return calculateAbilityScoreModifier(this[type]);
    // }


    public getActiveEffects(): Effect[] {
        return [];
    }
}
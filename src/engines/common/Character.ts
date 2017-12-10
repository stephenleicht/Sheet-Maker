import { Field } from 'ghoti';
import { AbilityScoreType } from './AbilityScoreType';
import { Effect } from './Effect';

import calculateAbilityScoreModifier from '../../utilities/abilityScoreModifierCalculator';
import { EffectType } from './EffectType';
import {EffectKey} from './EffectKey';

export interface CharacterFields {
    playerName: string;
    name: string;
    totalHitPoints: number;
}

interface EffectState {
    untyped: {
        active: Effect[],
    },
    typed: {
        [subtype: string]: {
            active: Effect,
            inactive: Effect[],
            value: number,
        },
    },
    value: number,
}

interface CharacterState {
    [fieldName: string]: {
        bonus: EffectState,
        penalty: EffectState,
        value: number,
    }
}

function createDefaultEffectState() {
    return {
        bonus: {
            typed: {
                value: 0
            },
            untyped: {
                active: [],
                value: 0
            },
            value: 0
        },
        penalty: {
            typed: {
                value: 0
            },
            untyped: {
                active: [],
                value: 0
            },
            value: 0
        }
    }
}

export default class Character implements CharacterFields {
    public state: CharacterState;

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

    public get strengthModifier() {
        return calculateAbilityScoreModifier(this.strength);
    }

    public get dexterityModifier() {
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

    public get strength() { 
        return this.baseStrength + this.getEffectsForKey(EffectKey.Strength).value;
    }

    public get intelligence() { 
        return this.baseIntelligence + this.getEffectsForKey(EffectKey.Intelligence).value;
    }

    public get dexterity() { 
        return this.baseDexterity + this.getEffectsForKey(EffectKey.Dexterity).value;
    }

    public get constitution() { 
        return this.baseConstitution + this.getEffectsForKey(EffectKey.Constitution).value;
    }

    public get wisdom() { 
        return this.baseWisdom + this.getEffectsForKey(EffectKey.Wisdom).value;
    }

    public get charisma() { 
        return this.baseCharisma + this.getEffectsForKey(EffectKey.Charisma).value;
    }

    constructor(fields: Partial<CharacterFields> = {}) {
        Object.assign(this, fields);
    }

    public getAbilityScoreModifier(type: AbilityScoreType): number {
        return calculateAbilityScoreModifier(this[type]);
    }

    public getEffectsForKey(fieldKey: string) {
        if(!this.state || !this.state[fieldKey]) {
            return {value: 0};
        }

        return this.state[fieldKey];
    }

    public computeCharacterState() {
        const activeEffects = this.getActiveEffects();

        const newState: CharacterState = activeEffects.reduce((agg, effect) => {
            agg[effect.key] = agg[effect.key] || createDefaultEffectState();

            if(!effect.subtype) {
                agg[effect.key][effect.type].untyped = agg[effect.key][effect.type].untyped;
                agg[effect.key][effect.type].untyped.active.push(effect);
                agg[effect.key][effect.type].value += effect.value;
            }
            else {
                agg[effect.key][effect.type].typed[effect.subtype] = agg[effect.key][effect.type].typed[effect.subtype] || {
                    inactive: [],
                    value: 0
                };

                const existingActiveEffect = agg[effect.key][effect.type].typed[effect.subtype].active
                if(!existingActiveEffect ||
                    (effect.type === EffectType.Bonus && existingActiveEffect.value < effect.value) ||
                    (effect.type === EffectType.Penalty && existingActiveEffect.value > effect.value)
                ) {
                    agg[effect.key][effect.type].typed[effect.subtype].active = effect;
                    agg[effect.key][effect.type].typed[effect.subtype].value = effect.value;
                    agg[effect.key][effect.type].value += effect.value;

                    if(existingActiveEffect) {
                        agg[effect.key][effect.type].typed[effect.subtype].inactive.push(existingActiveEffect);
                        agg[effect.key][effect.type].value -= existingActiveEffect.value;
                    }
                }
                else {
                    agg[effect.key][effect.type].typed[effect.subtype].inactive.push(effect);
                }
            }

            agg[effect.key].value = agg[effect.key].bonus.value + agg[effect.key].penalty.value

            return agg;
        }, {} as CharacterState)

        this.state = newState;
    }

    public getActiveEffects(): Effect[] {
        return [];
    }
}
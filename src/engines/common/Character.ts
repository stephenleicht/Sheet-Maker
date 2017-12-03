import { Field } from 'ghoti';
import { AbilityScoreType } from './AbilityScoreType';
import { Effect } from './Effect';

import calculateAbilityScoreModifier from '../../utilities/abilityScoreModifierCalculator';
import { EffectType } from './EffectType';

export interface CharacterFields {
    playerName: string;
    name: string;
    totalHitPoints: number;
}

interface CharacterState {
    bonuses: {
        [fieldName: string]: {
            untyped: {
                active: Effect[],
                value: number,
            },
            typed: {
                [subtype: string]: {
                    active: Effect,
                    inactive: Effect[],
                    value: number,
                }
            }
        }
    },
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

    constructor(fields: Partial<CharacterFields> = {}) {
        Object.assign(this, fields);
    }

    public getAbilityScoreModifier(type: AbilityScoreType): number {
        return calculateAbilityScoreModifier(this[type]);
    }

    public computeCharacterState() {
        const activeEffects = this.getActiveEffects();

        const newState: CharacterState = activeEffects.reduce((agg, effect) => {
            if(effect.type === EffectType.Bonus) {
                agg.bonuses[effect.key] = agg.bonuses[effect.key] || {
                    typed: {},
                    untyped: {
                        active: [],
                        value: 0
                    }
                };

                if(!effect.subtype) {
                    agg.bonuses[effect.key].untyped = agg.bonuses[effect.key].untyped;
                    agg.bonuses[effect.key].untyped.active.push(effect);
                    agg.bonuses[effect.key].untyped.value += effect.value;
                }
                else {
                    agg.bonuses[effect.key].typed[effect.subtype] = agg.bonuses[effect.key].typed[effect.subtype] || {
                        inactive: []
                    };

                    const existingActiveEffect = agg.bonuses[effect.key].typed[effect.subtype].active
                    if(!existingActiveEffect || existingActiveEffect.value < effect.value) {
                        agg.bonuses[effect.key].typed[effect.subtype].active = effect;
                        agg.bonuses[effect.key].typed[effect.subtype].value = effect.value;

                        if(existingActiveEffect) {
                            agg.bonuses[effect.key].typed[effect.subtype].inactive.push(existingActiveEffect);
                        }
                    }
                    else {
                        agg.bonuses[effect.key].typed[effect.subtype].inactive.push(effect);
                    }
                }
            }

            return agg;
        }, {
            bonuses: {}
        } as CharacterState)

        this.state = newState;
    }

    public getActiveEffects(): Effect[] {
        return [];
    }
}
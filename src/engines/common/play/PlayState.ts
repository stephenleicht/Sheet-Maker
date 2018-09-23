import { isNumber } from 'lodash';
import { Effect } from '../Effect';
import { EffectType } from '../EffectType';
import Character from '../Character';

interface EffectState<T> {
    untyped: {
        active: Effect[],
        value: T,
    },
    typed: {
        [subtype: string]: {
            active: Effect,
            inactive: Effect[],
            value: T,
        },
    },
    value: T,
}

export interface PlayState {
    effects: {
        [fieldName: string]: {
            bonus: EffectState<number>,
            penalty: EffectState<number>,
            set: EffectState<any>,
        }
    }
}

function createDefaultEffectState(): PlayState['effects']['fieldName'] {
    return {
        bonus: {
            typed: {},
            untyped: {
                active: [],
                value: 0
            },
            value: 0
        },
        penalty: {
            typed: {},
            untyped: {
                active: [],
                value: 0
            },
            value: 0
        },
        set: {
            typed: {},
            untyped: {
                active: [],
                value: 0
            },
            value: null
        }
    }
}

export function computePlayStateEffects(character: Character): PlayState['effects'] {
    const activeEffects = character.getActiveEffects();

    const newState: PlayState['effects'] = activeEffects.reduce((agg, effect) => {
        agg[effect.key] = agg[effect.key] || createDefaultEffectState();

        if (effect.type === EffectType.Set) {
            agg[effect.key].set.value = effect.value;

        }
        else {
            if (!effect.subtype) {
                agg[effect.key][effect.type].untyped = agg[effect.key][effect.type].untyped;
                agg[effect.key][effect.type].untyped.active.push(effect);

                if (isNumber(effect.value)) {
                    agg[effect.key][effect.type].untyped.value += effect.value;
                }
            }
            else {
                agg[effect.key][effect.type].typed[effect.subtype] = agg[effect.key][effect.type].typed[effect.subtype] || {
                    inactive: [],
                    value: 0
                };

                if (isNumber(effect.value)) {
                    const existingActiveEffect = agg[effect.key][effect.type].typed[effect.subtype].active
                    if (!existingActiveEffect ||
                        (effect.type === EffectType.Bonus && existingActiveEffect.value < effect.value) ||
                        (effect.type === EffectType.Penalty && existingActiveEffect.value > effect.value)
                    ) {
                        agg[effect.key][effect.type].typed[effect.subtype].active = effect;
                        agg[effect.key][effect.type].typed[effect.subtype].value = effect.value;
                        agg[effect.key][effect.type].value = effect.value;

                        if (existingActiveEffect) {
                            agg[effect.key][effect.type].typed[effect.subtype].inactive.push(existingActiveEffect);
                        }
                    }
                    else {
                        agg[effect.key][effect.type].typed[effect.subtype].inactive.push(effect);
                    }
                }
            }
        }

        return agg;
    }, {} as PlayState['effects']);

    return newState
}

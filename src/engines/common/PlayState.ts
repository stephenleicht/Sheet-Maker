import { Effect } from './Effect';
import { EffectType } from './EffectType';
import { EffectKey } from './EffectKey';
import Character from './Character';

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

export interface PlayState {
    effects: {
        [fieldName: string]: {
            bonus: EffectState,
            penalty: EffectState,
            value: number,
        }
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

export function computePlayStateEffects(character: Character): PlayState['effects'] {
    const activeEffects = character.getActiveEffects();

    const newState: PlayState['effects'] = activeEffects.reduce((agg, effect) => {
        agg[effect.key] = agg[effect.key] || createDefaultEffectState();

        if (!effect.subtype) {
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
            if (!existingActiveEffect ||
                (effect.type === EffectType.Bonus && existingActiveEffect.value < effect.value) ||
                (effect.type === EffectType.Penalty && existingActiveEffect.value > effect.value)
            ) {
                agg[effect.key][effect.type].typed[effect.subtype].active = effect;
                agg[effect.key][effect.type].typed[effect.subtype].value = effect.value;
                agg[effect.key][effect.type].value += effect.value;

                if (existingActiveEffect) {
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
    }, {} as PlayState['effects'])

    return newState
}

function getEffectsForKey(state: PlayState, fieldKey: string) {
    if (!state.effects[fieldKey]) {
        return { value: 0 };
    }

    return state.effects[fieldKey];
}
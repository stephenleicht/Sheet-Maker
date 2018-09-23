import { EffectType } from './EffectType';

export interface Effect {
    type: EffectType,
    subtype?: string,
    key: string,
    value: number | boolean,
}
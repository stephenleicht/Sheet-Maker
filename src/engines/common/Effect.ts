import { EffectType } from './EffectType';

export interface Effect<T = any> {
    type: EffectType,
    subtype?: string,
    key: string,
    value: T,
}
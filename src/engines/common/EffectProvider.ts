import { Effect } from './Effect';

export interface EffectProvider {
    getEffects(): Effect[]
}
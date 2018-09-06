import { Model, Field } from 'ghoti';

import BaseStarfinderRace from "./BaseStarfinderRace";
import { StarfinderRaceName } from "./StarfinderRaceName";

import {Effect} from '../../common/Effect';
import {EffectType}  from '../../common/EffectType';
import {EffectKey} from '../../common/EffectKey';

export enum LashuntaSubspeciesType {
    Damaya = 'damaya',
    Korasha = 'korasha'
}

export interface LashuntaRaceInterface {
    subspecies: LashuntaSubspeciesType
}

@Model()
export default class LashuntaRace extends BaseStarfinderRace implements LashuntaRaceInterface {
    @Field({
        type: Field.enumOf(LashuntaSubspeciesType)
    })
    public subspecies: LashuntaSubspeciesType

    constructor() {
        super(StarfinderRaceName.Lashunta);
    }

    public getEffects(): Effect[] {
        return [
            {
                type: EffectType.Bonus,
                subtype: 'racial',
                key: EffectKey.Charisma,
                value: 1
            },
            {
                type: EffectType.Bonus,
                key: EffectKey.Charisma,
                value: 1
            },

            {
                type: EffectType.Bonus,
                subtype: 'racial',
                key: EffectKey.Charisma,
                value: 2
            },
            {
                type: EffectType.Bonus,
                subtype: 'racial',
                key: this.subspecies === LashuntaSubspeciesType.Damaya ? EffectKey.Intelligence : EffectKey.Strength,
                value: 2
            },
            {
                type: EffectType.Penalty,
                subtype: 'racial',
                key: this.subspecies === LashuntaSubspeciesType.Damaya ? EffectKey.Constitution : EffectKey.Wisdom,
                value: -2
            }
        ]
    }
}
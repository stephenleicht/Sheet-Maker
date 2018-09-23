import { Model, Field } from 'ghoti';

import BaseStarfinderRace from "./BaseStarfinderRace";
import { StarfinderRaceName } from "./StarfinderRaceName";

import {Effect} from '../../common/Effect';
import {EffectType}  from '../../common/EffectType';
import {EffectKey} from '../../common/EffectKey';

export enum LashuntaSubspecies {
    Damaya = 'damaya',
    Korasha = 'korasha'
}


@Model()
export default class LashuntaRace extends BaseStarfinderRace {
    raceName: StarfinderRaceName.Lashunta = StarfinderRaceName.Lashunta 
    
    @Field({
        type: Field.enumOf(LashuntaSubspecies)
    })
    public subspecies: LashuntaSubspecies

    public getEffects(): Effect[] {
        return [
            {
                type: EffectType.Bonus,
                subtype: 'racial',
                key: EffectKey.Charisma,
                value: 2
            },
            {
                type: EffectType.Bonus,
                subtype: 'racial',
                key: this.subspecies === LashuntaSubspecies.Damaya ? EffectKey.Intelligence : EffectKey.Strength,
                value: 2
            },
            {
                type: EffectType.Penalty,
                subtype: 'racial',
                key: this.subspecies === LashuntaSubspecies.Damaya ? EffectKey.Constitution : EffectKey.Wisdom,
                value: 2
            }
        ]
    }
}
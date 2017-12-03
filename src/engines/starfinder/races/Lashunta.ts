import BaseStarfinderRace from "./BaseStarfinderRace";
import { StarfinderRaceName } from "./StarfinderRaceName";

import {Effect} from '../../common/Effect';
import {EffectType}  from '../../common/EffectType';

export enum LashuntaSubspeciesType {
    Damaya = 'damaya',
    Korasha = 'korasha'
}

export interface LashuntaRaceInterface {
    subspecies: LashuntaSubspeciesType
}

export default class LashuntaRace extends BaseStarfinderRace implements LashuntaRaceInterface {
    public subspecies: LashuntaSubspeciesType

    constructor() {
        super(StarfinderRaceName.Lashunta);
    }

    public getEffects(): Effect[] {
        return [
            {
                type: EffectType.Bonus,
                subtype: 'racial',
                key: 'abilityScore.charisma',
                value: 2
            },
            {
                type: EffectType.Bonus,
                subtype: 'racial',
                key: 'abilityScore.charisma',
                value: 4
            },
            {
                type: EffectType.Bonus,
                subtype: 'racial',
                key: 'abilityScore.charisma',
                value: 1
            },
            {
                type: EffectType.Bonus,
                key: 'abilityScore.charisma',
                value: 5
            },
            {
                type: EffectType.Bonus,
                key: 'abilityScore.charisma',
                value: 6
            }
        ]
    }
}
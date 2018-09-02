import {Field, Model} from 'ghoti';
import { StarfinderRaceName } from './StarfinderRaceName';
import { EffectProvider } from '../../common/EffectProvider';
import { Effect } from '../../common/Effect';


@Model()
export default class BaseStarfinderRace implements EffectProvider{
    public raceName: StarfinderRaceName;

    constructor(raceName: StarfinderRaceName = StarfinderRaceName.Lashunta) {
        this.raceName = raceName;
    }

    public getEffects(): Effect[] {
        return []
    }

    toString() {
        return this.raceName;
    }
}
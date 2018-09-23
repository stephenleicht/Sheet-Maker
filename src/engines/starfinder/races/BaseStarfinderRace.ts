import {Field, Model} from 'ghoti';
import { StarfinderRaceName } from './StarfinderRaceName';
import { EffectProvider } from '../../common/EffectProvider';
import { Effect } from '../../common/Effect';


@Model()
export default class BaseStarfinderRace implements EffectProvider{
    public raceName: StarfinderRaceName;

    public getEffects(): Effect[] {
        return []
    }

    toString() {
        return this.raceName;
    }
}
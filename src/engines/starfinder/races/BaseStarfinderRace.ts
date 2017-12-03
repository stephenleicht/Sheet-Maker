import {Field, Model} from 'ghoti';
import { StarfinderRaceName } from './StarfinderRaceName';
import { EffectProvider } from '../../common/EffectProvider';
import { Effect } from '../../common/Effect';

const raceValues = Object
                    .entries(StarfinderRaceName)
                    .reduce((agg, [displayValue, key]) => {
                        agg[key] = displayValue;
                        return agg;
                    }, {});

@Model()
export default abstract class BaseStarfinderRace implements EffectProvider{
    @Field({
        possibleValues: raceValues
    })
    public raceName: StarfinderRaceName;

    constructor(raceName: StarfinderRaceName) {
        this.raceName = raceName;
    }

    public abstract getEffects(): Effect[];
}
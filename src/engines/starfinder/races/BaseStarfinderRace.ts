import {Field, Model} from 'ghoti';
import { StarfinderRaceName } from './StarfinderRaceName';

const raceValues = Object
                    .entries(StarfinderRaceName)
                    .reduce((agg, [displayValue, key]) => {
                        agg[key] = displayValue;
                        return agg;
                    }, {});

@Model()
export default class BaseStarfinderRace {
    @Field({
        possibleValues: raceValues
    })
    public raceName: StarfinderRaceName;

    constructor(raceName: StarfinderRaceName) {
        this.raceName = raceName;
    }
}
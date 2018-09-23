import { Model } from 'ghoti';
import BaseStarfinderRace from "./BaseStarfinderRace";
import { StarfinderRaceName } from "./StarfinderRaceName";

@Model()
export default class VeskRace extends BaseStarfinderRace {
    raceName: StarfinderRaceName.Vesk = StarfinderRaceName.Vesk

    public getEffects() {
        return [];
    }
}
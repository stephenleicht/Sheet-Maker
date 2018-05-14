import { Model } from 'ghoti';
import BaseStarfinderRace from "./BaseStarfinderRace";
import { StarfinderRaceName } from "./StarfinderRaceName";
// import { StarfinderRace } from "engines/starfinder/races/StarfinderRace";

export interface VeskRaceInterface {
    // raceName: ''
}

@Model()
export default class VeskRace extends BaseStarfinderRace implements VeskRaceInterface {
    constructor() {
        super(StarfinderRaceName.Vesk);
    }

    public getEffects() {
        return [];
    }
}
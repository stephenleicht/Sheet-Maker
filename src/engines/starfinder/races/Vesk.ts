import BaseStarfinderRace from "engines/starfinder/races/BaseStarfinderRace";
import { StarfinderRaceName } from "engines/starfinder/races/StarfinderRaceName";
// import { StarfinderRace } from "engines/starfinder/races/StarfinderRace";

export interface VeskRaceInterface {
    // raceName: ''
}

export default class VeskRace extends BaseStarfinderRace implements VeskRaceInterface {
    constructor() {
        super(StarfinderRaceName.Vesk);
    }

    public getEffects() {
        return [];
    }
}
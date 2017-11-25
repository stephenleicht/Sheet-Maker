import BaseStarfinderRace from "./BaseStarfinderRace";
import { StarfinderRaceName } from "./StarfinderRaceName";

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
}
import { Field, Model } from 'ghoti';
import BaseStarfinderClass from './BaseStarfinderClass';

export enum SolarManifestation {
    Armor = 'armor',
    Weapon = 'weapon'
}

@Model()
class Solarian extends BaseStarfinderClass {
    @Field({
        type: Field.enumOf(SolarManifestation)
    })
    manifestation: SolarManifestation

    constructor() {
        super();

        this.classSkills = ['acrobatics']
    }
}

export default Solarian;
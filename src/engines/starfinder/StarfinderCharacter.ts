import { Model, Field } from 'ghoti';
import Character, {CharacterFields} from '../common/Character';
import StarfinderSkills from './skills/StarfinderSkills';
import LashuntaRace, { LashuntaSubspeciesType } from './races/Lashunta';
import { StarfinderRaceName } from './races/StarfinderRaceName';
import { StarfinderRace, StarfinderRaceTaggedUnion } from './races/StarfinderRace';
import StarfinderEquipment from './equipment/StarfinderEquipment';

import Feat from './feats/Feat';

import { Effect } from '../common/Effect';

export interface StarfinderCharacterFields extends CharacterFields {
    staminaPoints: number;
    skills: StarfinderSkills;
}

@Model()
export default class StarfinderCharacter extends Character  implements StarfinderCharacterFields{
    @Field()
    public staminaPoints: number;

    @Field()
    public skills: StarfinderSkills

    @Field({
        type: StarfinderRaceTaggedUnion
    })
    public race: StarfinderRace;

    @Field({
        type: Field.arrayOf(Feat)
    })
    public feats: Feat[]

    @Field()
    public equipment: StarfinderEquipment;


    constructor(options?: Partial<StarfinderCharacterFields>) {
        const {
            staminaPoints = 0,
            skills = new StarfinderSkills(), 
            ...rest
        }  = options || {};

        super(rest);

        const race = new LashuntaRace();
        race.subspecies = LashuntaSubspeciesType.Korasha;


        Object.assign(this, {
           staminaPoints,
           skills,
           race: race
        });
    }

    getSomething() {
        if(this.race.raceName === StarfinderRaceName.Lashunta) {
            const lashunta = this.race as LashuntaRace;

            if(lashunta.subspecies === LashuntaSubspeciesType.Korasha) {
                return 'korasha'
            }
        } 
        
        return 'Other';
    }

    public getActiveEffects(): Effect[] {
        const baseEffects = super.getActiveEffects();

        return [
            ...baseEffects,
            ...this.race.getEffects()
        ]
    }
}

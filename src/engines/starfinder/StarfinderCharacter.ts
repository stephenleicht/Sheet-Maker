import { Model, Field } from 'ghoti';
import Character, {CharacterFields} from '../common/Character';
import StarfinderSkills from './skills/StarfinderSkills';
import LashuntaRace, { LashuntaSubspeciesType } from './races/Lashunta';
import { StarfinderRaceName } from './races/StarfinderRaceName';
import BaseStarfinderRace from './races/BaseStarfinderRace';
import RaceChooser from './components/RaceChooser';

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
        Component: RaceChooser
    })
    public race: BaseStarfinderRace;


    constructor(options?: Partial<StarfinderCharacterFields>) {
        const {
            staminaPoints = 0,
            skills = new StarfinderSkills(), 
            ...rest
        }  = options || {};

        super(rest);

        Object.assign(this, {
           staminaPoints,
           skills,
        });

        const race = new LashuntaRace();
        race.subspecies = LashuntaSubspeciesType.Korasha;

        this.race = race;
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
import { Field, Model } from 'ghoti';
import Character, { CharacterFields } from '../common/Character';
import { Effect } from '../common/Effect';
import StarfinderEquipment from './equipment/StarfinderEquipment';
import Feat from './feats/Feat';
import LashuntaRace, { LashuntaSubspeciesType } from './races/Lashunta';
import { StarfinderRace, StarfinderRaceTaggedUnion } from './races/StarfinderRace';
import StarfinderSkills from './skills/StarfinderSkills';



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

    public getActiveEffects(): Effect[] {
        const baseEffects = super.getActiveEffects();

        return [
            ...baseEffects,
            ...this.race.getEffects()
        ]
    }
}

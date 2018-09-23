import { Field, Model } from 'ghoti';
import Character from '../common/Character';
import { Effect } from '../common/Effect';
import StarfinderClasses from './classes/StarfinderClasses';
import StarfinderEquipment from './equipment/StarfinderEquipment';
import Feat from './feats/Feat';
import { StarfinderRace, StarfinderRaceTaggedUnion } from './races/StarfinderRace';
import StarfinderSkills from './skills/StarfinderSkills';


@Model()
export default class StarfinderCharacter extends Character {
    @Field()
    public staminaPoints: number;

    @Field()
    public classes: StarfinderClasses

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

    public getActiveEffects(): Effect[] {
        const baseEffects = super.getActiveEffects();

        return [
            ...baseEffects,
            ...this.race.getEffects(),
            ...this.classes.getEffects(),
        ]
    }
}

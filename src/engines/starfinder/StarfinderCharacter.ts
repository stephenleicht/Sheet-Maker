import { Model, Field } from 'ghoti';
import Character, {CharacterFields} from '../common/Character';
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

    constructor(options: StarfinderCharacterFields) {
        const {staminaPoints, skills, ...rest}  = options;
        super(rest);

        Object.assign(this, {
           staminaPoints,
           skills,
        });
    }
}
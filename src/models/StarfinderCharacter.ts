import { Model, Field } from 'ghoti';
import Character, {CharacterFields} from './Character';

import calculateAbilityScoreModifier from '../utilities//abilityScoreModifierCalculator';

interface StarfinderCharacterFields extends CharacterFields {
    staminaPoints: number;

    //ability scores
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

@Model()
export default class StarfinderCharacter extends Character  implements StarfinderCharacterFields{
    @Field()
    public staminaPoints: number;

    @Field()
    public strength: number;
   
    @Field()
    public dexterity: number;
    
    @Field()
    public constitution: number;
    
    @Field()
    public intelligence: number;
    
    @Field()
    public wisdom: number;
    
    @Field()
    public charisma: number;

    public get strengthModifier() {
        return calculateAbilityScoreModifier(this.strength);
    }

    public get dexterityhModifier() {
        return calculateAbilityScoreModifier(this.dexterity);
    }

    public get constitutionModifier() {
        return calculateAbilityScoreModifier(this.constitution);
    }

    public get intelligenceModifier() {
        return calculateAbilityScoreModifier(this.intelligence);
    }

    public get wisdomhModifier() {
        return calculateAbilityScoreModifier(this.wisdom);
    }

    public get charismaModifier() {
        return calculateAbilityScoreModifier(this.charisma);
    }

    constructor(options: StarfinderCharacterFields) {
        const {strength, dexterity, constitution, intelligence, wisdom, charisma, ...rest}  = options;
        super(rest);

        Object.assign(this, {
            strength, 
            dexterity, 
            constitution, 
            intelligence, 
            wisdom, 
            charisma
        });
    }
}
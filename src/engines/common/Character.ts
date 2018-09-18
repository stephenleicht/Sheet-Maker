import { Field, Model } from 'ghoti';
import AbilityScores from './AbilityScores';
import { Effect } from './Effect';


export interface CharacterFields {
    playerName: string;
    name: string;
    totalHitPoints: number;
}

@Model()
export default class Character implements CharacterFields {
    @Field()
    public playerName: string;
    
    @Field()
    public name: string;
    
    @Field()
    public totalHitPoints: number;

    @Field()
    public abilityScore: AbilityScores

    @Field({
        type: Field.arrayOf(String)
    })
    public languages: string[]


    constructor(fields: Partial<CharacterFields> = {}) {
        Object.assign(this, fields);
    }

    public getActiveEffects(): Effect[] {
        return [];
    }
}
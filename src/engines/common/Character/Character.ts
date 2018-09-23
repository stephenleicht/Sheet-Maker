import { Field, Model } from 'ghoti';
import AbilityScores from './AbilityScores';
import { Effect } from '../Effect';

@Model()
export default class Character {
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

    public getActiveEffects(): Effect[] {
        return [];
    }
}
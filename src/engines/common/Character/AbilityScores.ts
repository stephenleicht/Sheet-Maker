import { Model, Field } from "ghoti";

export type AbilityType = keyof AbilityScores;

@Model()
export default class AbilityScores {
    @Field()
    public str: number;
   
    @Field()
    public dex: number;
    
    @Field()
    public con: number;
    
    @Field()
    public int: number;
    
    @Field()
    public wis: number;
    
    @Field()
    public cha: number;
}

export function calculateAbilityScoreModifier(abilityScore: number): number {
    const centered = abilityScore - 10;
    return Math.floor(centered / 2);
}
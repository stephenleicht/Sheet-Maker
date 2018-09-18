import { Model, Field } from "ghoti";

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
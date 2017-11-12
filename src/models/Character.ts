import { Field } from 'ghoti';

export interface CharacterFields {
    playerName: string;
    name: string;
    totalHitPoints: number;
}

export default class Character implements CharacterFields {
    @Field()
    public playerName: string;
    
    @Field()
    public name: string;
    
    @Field()
    public totalHitPoints: number;

    constructor(fields: CharacterFields) {
        Object.assign(this, fields);
    }


}
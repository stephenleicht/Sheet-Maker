export interface CharacterFields {
    playerName: string;
    name: string;
    totalHitPoints: number;
}

export default class Character implements CharacterFields {
    public playerName: string;
    public name: string;
    public totalHitPoints: number;

    constructor(fields: CharacterFields) {
        Object.assign(this, fields);
    }


}
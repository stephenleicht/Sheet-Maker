import { Model, Field } from 'ghoti';

@Model()
export default class Roll {
    @Field()
    quantity: number = 0

    @Field()
    sides: number

    @Field()
    modifier: number

    constructor(quantity: number = 1, sides: number = 20, modifier: number = 0) {
        this.quantity = quantity;
        this.sides = sides;
        this.modifier = modifier;
    }

    toString() {
        const base = `${this.quantity}d${this.sides}`;
        if(this.modifier === 0) {
            return base;
        }
        else if(this.modifier < 0) {
            return `${base}${this.modifier}`
        }
        else {
            return `${base}+${this.modifier}`
        } 
    }
}
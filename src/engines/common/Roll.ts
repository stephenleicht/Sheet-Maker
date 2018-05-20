import { Model, Field } from 'ghoti';

@Model()
export default class Roll {
    @Field()
    quantity: number

    @Field()
    sides: number

    toString() {
        return `${this.quantity}d${this.sides}`
    }
}
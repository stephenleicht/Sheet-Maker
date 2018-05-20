import { Model, Field } from 'ghoti';

import { Weapon, WeaponTaggedUnion } from './weapons/Weapon';

@Model()
export default class StarfinderEquipment {
    @Field()
    credits: number;

    @Field()
    UPB: number;

    @Field({
        arrayOf: WeaponTaggedUnion
    })
    weapons: Weapon[];

}
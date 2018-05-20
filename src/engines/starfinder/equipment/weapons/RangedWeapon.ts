import {Model, Field} from 'ghoti';
import { WeaponType } from './WeaponType';

import { BaseWeapon } from './BaseWeapon';
import { AmmoType } from './AmmoType';

@Model()
export default class RangedWeapon extends BaseWeapon {
    type: WeaponType.SmallArm | WeaponType.HeavyWeapon = WeaponType.SmallArm

    @Field()
    range: number
    
    @Field()
    ammoCapacity: number

    @Field({
        enumOf: AmmoType
    })
    ammoType: AmmoType

    @Field()
    ammoUsage: number
}
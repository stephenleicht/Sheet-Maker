import { Field, Model } from 'ghoti';

import Roll from '../../../common/Roll';

import { WeaponCategory } from './WeaponCategory';
import { CriticalEffectType } from './CriticalEffectType';

@Model()
export class BaseWeapon {
    @Field({
        required: true,
        type: Field.enumOf(WeaponCategory)
    })
    category: WeaponCategory = WeaponCategory.Uncategorized

    @Field()
    level: number = 0

    @Field()
    price: number = 0

    @Field()
    damage: Roll

    @Field()
    hands: number;

    @Field()
    bulk: number;

    @Field({
        type: Field.enumOf(CriticalEffectType)
    })
    criticalEffectType: CriticalEffectType

    @Field()
    criticalEffectRoll?: Roll

}



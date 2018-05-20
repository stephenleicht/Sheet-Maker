import {Model, Field} from 'ghoti';

import { WeaponType } from './WeaponType';

import { BaseWeapon } from './BaseWeapon';

@Model()
export default class MeleeWeapon extends BaseWeapon {
    type: WeaponType.BasicMelee | WeaponType.AdvancedMelee = WeaponType.BasicMelee
}
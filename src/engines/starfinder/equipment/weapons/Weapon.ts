import { Field } from 'ghoti';
import { WeaponType } from './WeaponType';
import MeleeWeapon from './MeleeWeapon';
import RangedWeapon from './RangedWeapon';


export type Weapon = MeleeWeapon | RangedWeapon

export const WeaponTaggedUnion = Field.taggedUnion('type', {
    [WeaponType.BasicMelee]: MeleeWeapon,
    [WeaponType.AdvancedMelee]: MeleeWeapon,
    [WeaponType.SmallArm]: RangedWeapon,
    [WeaponType.HeavyWeapon]: RangedWeapon,
})
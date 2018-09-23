import { Field, Model } from 'ghoti';

@Model()
export default class SkillState {
    @Field()
    public rank: number = 0;

    @Field()
    public isClassSkill: boolean = false;

    public miscMod: number = 0;
}
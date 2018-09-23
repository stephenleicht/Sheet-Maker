import { Field, Model } from "ghoti";
import { SkillIndex } from "../skills/SkillInfo";

@Model()
export default class BaseStarfinderClass {
    @Field()
    public level: number;

    @Field({
        type: Field.arrayOf(String)
    })
    public abilities: string[]

    classSkills: Array<keyof SkillIndex>;
}

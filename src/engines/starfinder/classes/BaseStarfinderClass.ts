import { Field, Model } from "ghoti";
import { SkillName } from "../skills/StarfinderSkillIndex";

@Model()
export default class BaseStarfinderClass {
    @Field()
    public level: number;

    @Field({
        type: Field.arrayOf(String)
    })
    public abilities: string[]

    classSkills: Array<SkillName>;
}

import { Model, Field } from "ghoti";
import Solarian from "./Solarian";
import { EffectProvider } from "../../common/EffectProvider";
import { Effect } from "../../common/Effect";
import { EffectType } from "../../common/EffectType";

@Model()
export default class StarfinderClasses implements EffectProvider {
    @Field()
    solarian: Solarian;


    getEffects(): Effect[] {
        //TODO: Look up how multiclassing affect class skills
        const retVal: Effect[] = this.solarian.classSkills.map((skill) => ({
            type: EffectType.Set,
            key: `skills.${skill}.isClassSkill`,
            value: true,
        }))

        return retVal;
    }
}
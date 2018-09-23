import { SkillInfo } from "./SkillInfo";

export type SkillIndex<K = unknown, V = SkillInfo> = {
    [key in keyof K]: V
}
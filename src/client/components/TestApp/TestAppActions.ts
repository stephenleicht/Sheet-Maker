import StarfinderCharacter, { StarfinderCharacterFields } from "engines/starfinder/StarfinderCharacter";
import StarfinderSkills from "engines/starfinder/skills/StarfinderSkills";


export async function getCharacterByID(id: string): Promise<StarfinderCharacter> {
    const response = await fetch(`/api/models/starfindercharacters/${id}`)
    const body: StarfinderCharacterFields = await response.json();

    body.skills = new StarfinderSkills();

    body.skills.acrobatics.isClassSkill = true;

    return new StarfinderCharacter(body);
}
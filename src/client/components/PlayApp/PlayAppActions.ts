import {deserialize} from 'ghoti';
import StarfinderCharacter from "engines/starfinder/StarfinderCharacter";

export async function getCharacterByID(id: string): Promise<StarfinderCharacter> {
    const response = await fetch(`http://localhost:4000/api/models/starfindercharacters/${id}`)
    const body: any = await response.json();

    return deserialize(StarfinderCharacter, body);
}
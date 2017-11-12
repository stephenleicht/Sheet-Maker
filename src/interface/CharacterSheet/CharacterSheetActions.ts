import StarfinderCharacter from '../../models/StarfinderCharacter';

export async function getCharacterByID(id: string): Promise<StarfinderCharacter> {
    const response = await fetch(`/api/models/starfindercharacters/${id}`)
    const body = await response.json();

    return new StarfinderCharacter(body);
}
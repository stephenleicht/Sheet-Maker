import * as React from 'react';

import StarfinderCharacter from '../../../../engines/starfinder/StarfinderCharacter';
import SkillsTableRow from './SkillsTableRow';

export interface SkillsTableProps {
    character: StarfinderCharacter;
}

export default function SkillsTable({character}: SkillsTableProps) {
    return (
        <table>
            <tbody>
                <SkillsTableRow character={character} skillState={character.skills.acrobatics}/>
                <SkillsTableRow character={character} skillState={character.skills.other}/>
            </tbody>
        </table>
    )
}
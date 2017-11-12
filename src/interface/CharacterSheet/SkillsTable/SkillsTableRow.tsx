import * as React from 'react';
import SkillState from '../../../engines/starfinder/skills/SkillState';
import StarfinderCharacter from '../../../engines/starfinder/StarfinderCharacter';

export interface SkillsTableRowProps {
    character: StarfinderCharacter,
    skillState: SkillState
}

export default function SkillsTableRow({skillState, character}: SkillsTableRowProps) {
    return (
        <tr>
            <td>
                <input readOnly type="checkbox" checked={skillState.isClassSkill}/>{skillState.skill.name}
            </td>
            <td>
                {skillState.getTotalModifier(character)}
            </td>
        </tr>
    )
}
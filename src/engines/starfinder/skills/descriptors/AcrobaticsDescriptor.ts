import { AbilityScoreType } from '../../../common/AbilityScoreType';

import SkillDescriptor from './SkillDescriptor';

const AcrobaticsDescriptor: SkillDescriptor = {
    key: 'ACROBATICS',
    name: 'Acrobatics',
    description: "skill description",
    abilityScore: AbilityScoreType.Dex,
    trainedOnly: false,
    armorCheckPenaltyApplies: true,
}

export default AcrobaticsDescriptor;
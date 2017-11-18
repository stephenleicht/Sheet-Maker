import { AbilityScoreType } from '../../../common/AbilityScoreType';

import SkillDescriptor from './SkillDescriptor';

const OtherDescriptor: SkillDescriptor = {
    key: 'OTHER',
    name: 'other',
    description: "skill description",
    abilityScore: AbilityScoreType.Str,
    trainedOnly: false,
    armorCheckPenaltyApplies: true,
}

export default OtherDescriptor;
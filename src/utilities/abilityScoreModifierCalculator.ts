export default function calculateAbilityScoreModifier(abilityScore: number): number {
    const centered = abilityScore - 10;
    return Math.floor(centered / 2);
}
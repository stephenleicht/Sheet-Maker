import { PlayCharacter } from 'engines/common/play/PlayCharacter';
import StarfinderCharacter from 'engines/starfinder/StarfinderCharacter';
import { ModelType, ModelMeta } from 'ghoti';
import * as React from 'react';
import { rollDie } from '../../../play/playActions';
import AbilityScore from './AbilityScore';
import * as styles from './CharacterTab.css';
import Roll from 'engines/common/Roll';


export interface CharacterTabProps {
    character: PlayCharacter<StarfinderCharacter>
}

export default class CharacterTab extends React.Component<CharacterTabProps> {
    onRoll = (ability: keyof StarfinderCharacter['abilityScore'], modifier: number) => {
        const roll = new Roll(1, 20, modifier);
        rollDie(roll.toString())
    }

    render() {
        const { character } = this.props;

        const abilityMeta: ModelMeta = (StarfinderCharacter as ModelType<any>)
            .modelMeta.fields.abilityScore.type.modelMeta;

        return (
            <div className={styles.wrapper}>
                <h5>{character.name}</h5>
                <section>
                    Stamina: {character.staminaPoints}
                </section>
                <section>
                    <h6>Abilities</h6>
                    <div>
                        {Object.keys(abilityMeta.fields)
                            .map((key) => (
                                <AbilityScore
                                    key={key}
                                    character={character}
                                    ability={key as keyof StarfinderCharacter['abilityScore']}
                                    onRoll={this.onRoll}
                                />
                            ))}

                    </div>
                </section>
            </div>
        );
    }
}
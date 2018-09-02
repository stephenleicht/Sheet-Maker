import { Field } from 'ghoti';
import { StarfinderRaceName } from './StarfinderRaceName';
import Lashunta from './Lashunta';
import Vesk from './Vesk';


export type StarfinderRace = Lashunta | Vesk

export const StarfinderRaceTaggedUnion = Field.taggedUnion('raceName', {
    [StarfinderRaceName.Lashunta]: Lashunta,
    [StarfinderRaceName.Vesk]: Vesk,
})

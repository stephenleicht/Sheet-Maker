import { Model, Field} from 'ghoti';

@Model()
export default class Feat {

    @Field()
    public ranks: number;

    @Field()
    public name: string;
}
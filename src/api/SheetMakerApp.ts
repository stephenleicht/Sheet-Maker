import 'reflect-metadata';
import ghoti from 'ghoti'

import StarfinderCharacter from '../models/StarfinderCharacter';


export default function run() {
    ghoti.configure({
        models: [
            StarfinderCharacter
        ]
    });
    
    ghoti.run()
        .catch(err => {
        console.error(err.stack);
    });
}
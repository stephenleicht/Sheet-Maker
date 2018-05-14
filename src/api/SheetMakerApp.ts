import 'reflect-metadata';
import ghoti from 'ghoti'

import StarfinderCharacter from '../engines/starfinder/StarfinderCharacter';


export default function run() {
    ghoti.configure({
        port: 4000,
        models: [
            StarfinderCharacter
        ]
    });
    
    ghoti.run()
        .catch(err => {
        console.error(err.stack);
    });
}
import { isNumber } from 'lodash';
import Character from "../Character/Character";
import { PlayState, computePlayStateEffects } from "./PlayState";

export type PlayCharacter<T> = T & {
    playState: PlayState
}

export function createPlayCharacter<T extends Character>(character: T) {
    const playState: PlayState = {
        effects: computePlayStateEffects(character)
    };

    const playChar: PlayCharacter<T> = createProxy(playState, character) as PlayCharacter<T>;
    playChar.playState = playState

    return playChar;
}

function isProxiableObject(value: any): value is object {
    return typeof value === 'object' && typeof value !== 'function';
}

function createProxy<T extends object>(playState: PlayState, target: T, path?: string): T {
    const childrenProxies = new WeakMap<object, T[keyof T]>();

    const handler: ProxyHandler<T> = {
        get(obj, prop: keyof T) {
            const rawValue = obj[prop];

            let childPath: string;
            if (path) {
                childPath = `${path}.${prop}`
            }
            else {
                childPath = prop.toString();
            }

            if (isProxiableObject(rawValue)) {
                let child;
                if (childrenProxies.has(rawValue)) {
                    child = childrenProxies.get(rawValue);
                }
                else {
                    child = createProxy(playState, rawValue, childPath)
                    childrenProxies.set(rawValue, child)
                }

                return child;
            }

            const effects = playState.effects[childPath];
            if (!effects) {
                return rawValue;
            }

            let retVal: unknown = effects.set.value ? effects.set.value : rawValue;
            if (isNumber(retVal)) {
                retVal = retVal + effects.bonus.value - effects.penalty.value;
            }

            return retVal;
        }
    }

    return new Proxy(target, handler)
}
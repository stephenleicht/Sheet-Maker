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
    return typeof value === 'object';
}

function createProxy<T extends object>(playState: PlayState, target: T, path?: string): T {
    const childrenProxies = new WeakMap<object, T[keyof T]>();

    const handler: ProxyHandler<T> = {
        get(obj, prop: keyof T) {
            if(['constructor'].includes(prop as string)) {
                return obj[prop];
            }

            let childPath: string;
            if (path) {
                childPath = `${path}.${prop}`
            }
            else {
                childPath = prop.toString();
            }

            const rawValue = obj[prop];

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

            if (!playState.effects[childPath]) {
                return rawValue;
            }

            let retVal: unknown = playState.effects[childPath].set.value ? playState.effects[childPath].set.value : rawValue;
            if (isNumber(retVal)) {
                retVal = retVal + playState.effects[childPath].bonus.value + playState.effects[childPath].penalty.value;

            }

            return retVal;
        }
    }

    return new Proxy(target, handler)
}
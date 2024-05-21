import ActionType from '../types'

export function Increment(): any {
    return {
        type: ActionType.INCREMENT
    }
}

export function Decrement(): any {
    return {
        type: ActionType.DECREMENT
    }
}
import * as ActionType from '../types/actiontype';

export interface State {
    number: number
}

export interface Action {
    type: string,
    payload?: any
}

const initialState : State = {
    number : 0
}

export default function createActionReducer(state : State = initialState, action : Action):State {
    switch(action.type) {
        case ActionType.INCREMENT:
            return {
                ...state,
                number: state.number + 1,
            }
        case ActionType.DECREMENT:
            return {
                ...state,
                number: state.number - 1,
            }
        default:
            return state
    }
}
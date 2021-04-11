const ITERATION = 'ITERATION';
const RESET = 'RESET';
const ONCHANGESTARTVALUE = 'ONCHANGESTARTVALUE';
const ONCHANGEENDVALUE = 'ONCHANGEENDVALUE';
const ERRORHANDLER = 'ERRORHANDLER';
const SETCOUNTER = 'SETCOUNTER';

type IterationActionType = {
    type: typeof ITERATION
}
type ResetActionType = {
    type: typeof RESET
}
type OnChangeStartValueActionType = {
    type: typeof ONCHANGESTARTVALUE
    value: number
}
type OnChangeEndValueActionType = {
    type: typeof ONCHANGEENDVALUE
    value: number
}
type ErrorHandlerActionType = {
    type: typeof ERRORHANDLER
}
type setCounterActionType = {
    type: typeof SETCOUNTER
    value: number
}

type CounterReducerActionType =
    ReturnType<typeof iterationAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof onChangeStartValueAC>
    | ReturnType<typeof onChangeEndValueAC>
    | ReturnType<typeof errorHandlerAC>
    | ReturnType<typeof setCounterAC>


type InitialStateType = {
    startValue: number
    endValue: number
    counter: number
    error: string
}


let initialState = {
    startValue: 0,
    endValue: 5,
    counter: 0,
    error: ""
}

const counterReducer = (state: InitialStateType = initialState, action: CounterReducerActionType): InitialStateType => {
    switch (action.type) {
        case ITERATION:
            if (state.startValue < state.endValue) {
                return {...state, counter: state.counter + 1}
            }
            return state;
        case RESET:
            return {...state, counter: state.startValue}
        case ONCHANGESTARTVALUE:
            return {...state, startValue: action.value}
        case ONCHANGEENDVALUE:
            return {...state, endValue: action.value}
        case ERRORHANDLER:
            if (state.startValue > state.endValue) {
                return {...state, error: "start, не должен быть выше max!"}
            }
            if(state.startValue === state.endValue) {
                return {...state, error: "Start, не должен быть равен max!"}
            }

            return {...state, error: ""};
        case SETCOUNTER:
            return {...state, counter: action.value}
        default:
            return state;
    }
}


export const iterationAC = (): IterationActionType => {
    return {
        type: ITERATION
    }
}
export const resetAC = (): ResetActionType => {
    return {
        type: RESET
    }
}
export const onChangeStartValueAC = (value: number): OnChangeStartValueActionType => {
    return {
        type: ONCHANGESTARTVALUE,
        value
    }
}
export const onChangeEndValueAC = (value: number): OnChangeEndValueActionType => {
    return {
        type: ONCHANGEENDVALUE,
        value
    }
}
export const errorHandlerAC = (): ErrorHandlerActionType => {
    return {
        type: ERRORHANDLER
    }
}
export const setCounterAC = (value: number): setCounterActionType => {
    return {
        type: SETCOUNTER,
        value
    }
}

export default counterReducer;
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
    ReturnType<typeof iteration>
    | ReturnType<typeof reset>
    | ReturnType<typeof onChangeStartValue>
    | ReturnType<typeof onChangeEndValue>
    | ReturnType<typeof errorHandler>
    | ReturnType<typeof setCounter>


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

            return {...state, error: ""};
        case SETCOUNTER:
            return {...state, counter: action.value}
        default:
            return state;
    }
}


export const iteration = (): IterationActionType => {
    return {
        type: ITERATION
    }
}
export const reset = (): ResetActionType => {
    return {
        type: RESET
    }
}
export const onChangeStartValue = (value: number): OnChangeStartValueActionType => {
    return {
        type: ONCHANGESTARTVALUE,
        value
    }
}
export const onChangeEndValue = (value: number): OnChangeEndValueActionType => {
    return {
        type: ONCHANGEENDVALUE,
        value
    }
}
export const errorHandler = (): ErrorHandlerActionType => {
    return {
        type: ERRORHANDLER
    }
}
export const setCounter = (value: number): setCounterActionType => {
    return {
        type: SETCOUNTER,
        value
    }
}

export default counterReducer;
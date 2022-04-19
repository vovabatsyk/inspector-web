export interface ViolationState {
    violation: Violation,
    isLoading: boolean,
    error: string
}

export interface Violation {
    violation_number: string,
    date: string,
    car_mark: string,
    car_model: string,
    car_number: string,
    address: string,
    photos: string[]
}


export enum ViolationActionEnum {
    SET_VIOLATION = 'SET_VIOLATION',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR'
}

export interface SetViolationAction {
    type: ViolationActionEnum.SET_VIOLATION
    payload: Violation
}
export interface SetIsLoadingAction {
    type: ViolationActionEnum.SET_IS_LOADING
    payload: boolean
}

export interface SetErrorAction {
    type: ViolationActionEnum.SET_ERROR
    payload: string
}

export type ViolationAction = SetViolationAction | SetIsLoadingAction | SetErrorAction
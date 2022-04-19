export interface IViolationState {
    violation_number: string,
    date: string,
    car_mark: string,
    car_model: string,
    car_number: string,
    address: string,
    photos: string[]
}

export enum ViolationActionEnum {
    SET_VIOLATION = 'SET_VIOLATION'
}

export interface ISetViolationAction {
    type: ViolationActionEnum.SET_VIOLATION
    payload: IViolationState
}

export type ViolationAction = ISetViolationAction
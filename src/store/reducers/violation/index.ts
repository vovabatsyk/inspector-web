import { IViolationState, ViolationAction, ViolationActionEnum } from "./types"

const violation = {

    violation_number: '',
    address: '',
    car_mark: '',
    car_model: '',
    car_number: '',
    date: '',
    photos: []
}


export default function violationReducer(state = violation, action: ViolationAction): IViolationState {
    switch (action.type) {
        case ViolationActionEnum.SET_VIOLATION:
            return { ...state, ...action.payload }

        default:
            return state
    }
}
import { ViolationState, ViolationAction, ViolationActionEnum } from "./types"

const initialState: ViolationState = {
    violation: {
        violation_number: '',
        address: '',
        car_mark: '',
        car_model: '',
        car_number: '',
        date: '',
        photos: []
    },
    error: '',
    isLoading: false
}


export default function violationReducer(state = initialState, action: ViolationAction): ViolationState {
    switch (action.type) {
        case ViolationActionEnum.SET_VIOLATION:
            return { ...state, violation: action.payload, isLoading: false }

        case ViolationActionEnum.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false }

        case ViolationActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
}
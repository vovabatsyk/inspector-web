import { IViolation } from "../../models/IViolation"

export interface ViolationState {
    violation: IViolation,
    isLoading: boolean,
    error: string
}
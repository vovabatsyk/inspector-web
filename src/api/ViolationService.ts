import { IViolationState } from './../store/reducers/violation/types'
import axios, { AxiosResponse } from "axios"

export default class ViolationService {
    static async getViolation(): Promise<AxiosResponse<IViolationState[]>> {
        return await axios.get<IViolationState[]>('./data/violation.json')
    }
}
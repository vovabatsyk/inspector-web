import { Violation } from './../store/reducers/violation/types'
import axios, { AxiosResponse } from "axios"

export default class ViolationService {
    static async getViolation(): Promise<AxiosResponse<Violation[]>> {
        return await axios.get<Violation[]>('./data/violation.json')
    }
}
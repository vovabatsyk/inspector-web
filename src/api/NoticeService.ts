import axios, { AxiosResponse } from "axios"
import { INotice } from "../store/reducers/notice/types"

export default class NoticeService {
    static async getNotice(): Promise<AxiosResponse<INotice[]>> {
        return await axios.get<INotice[]>('./data/notices.json')
    }
}
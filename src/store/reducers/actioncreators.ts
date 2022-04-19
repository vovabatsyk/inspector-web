import { INotice } from './../../models/INotice'
// import { AppDispatch } from './../store'
import axios from 'axios'
// import { noticeSlice } from './NoticeSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'

// export const fetchNotices = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(noticeSlice.actions.noticeFetching())
//         const response = await axios.get<INotice[]>('./data/notices.json')
//         dispatch(noticeSlice.actions.noticeFetchingSuccess(response.data))
//     } catch (e: any) {
//         dispatch(noticeSlice.actions.noticeFetchingError(e.message))
//     }
// }

export const fetchNotices = createAsyncThunk(
    'notice/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get<INotice[]>('./data/notices.json')
            return response.data
        } catch (e: any) {
            return thunkApi.rejectWithValue(e.message)
        }

    }
)
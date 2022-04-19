import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { INotice } from "../../models/INotice"
import { fetchNotices } from "./ActionCreators"

interface NoticeState {
    notices: INotice[],
    error: string,
    isLoading: boolean
}

const initialState: NoticeState = {
    notices: [],
    isLoading: false,
    error: ''
}

export const noticeSlice = createSlice({
    name: 'notice',
    initialState,
    reducers: {
        noticeFetching(state) {
            state.isLoading = true
        },
        noticeFetchingSuccess(state, action: PayloadAction<INotice[]>) {
            state.isLoading = false
            state.error = ''
            state.notices = action.payload
        },
        noticeFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    },
    extraReducers: {
        [fetchNotices.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchNotices.fulfilled.type]: (state, action: PayloadAction<INotice[]>) => {
            state.isLoading = false
            state.error = ''
            state.notices = action.payload
        },
        [fetchNotices.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default noticeSlice.reducer
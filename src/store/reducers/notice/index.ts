import { INoticeState, NoticeAction, NoticeActionEnum } from "./types"



const initialSate: INoticeState = {
    notices: [{ title: '', description: '' }],
    error: '',
    isLoading: false
}

export default function noticeReducer(state = initialSate, action: NoticeAction): INoticeState {
    switch (action.type) {
        case NoticeActionEnum.SET_NOTICE:
            return { ...state, notices: [...state.notices, action.payload], isLoading: false }

        case NoticeActionEnum.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false }

        case NoticeActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }

        default:
            return state
    }
}
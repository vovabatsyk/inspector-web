
export interface INoticeState {
    notices: INotice[],
    error: string,
    isLoading: boolean
}

export interface INotice {
    title: string
    description: string,
}

export enum NoticeActionEnum {
    SET_NOTICE = 'SET_NOTICE',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR'
}

export interface SetNoticeAction {
    type: NoticeActionEnum.SET_NOTICE
    payload: INotice
}


export interface SetIsLoadingAction {
    type: NoticeActionEnum.SET_IS_LOADING
    payload: boolean
}

export interface SetErrorAction {
    type: NoticeActionEnum.SET_ERROR
    payload: string
}

export type NoticeAction = SetNoticeAction | SetIsLoadingAction | SetErrorAction
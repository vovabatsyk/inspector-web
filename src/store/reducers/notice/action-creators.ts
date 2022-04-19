import { AppDispatch } from './../../index'
import { SetNoticeAction, NoticeActionEnum, INotice, SetIsLoadingAction, SetErrorAction } from './types'
import NoticeService from '../../../api/NoticeService'

export const NoticeActionCreator = {
    setNotice: (notice: INotice): SetNoticeAction => ({ type: NoticeActionEnum.SET_NOTICE, payload: notice }),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({ type: NoticeActionEnum.SET_IS_LOADING, payload: isLoading }),
    setError: (error: string): SetErrorAction => ({ type: NoticeActionEnum.SET_ERROR, payload: error }),

    getNotice: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(NoticeActionCreator.setIsLoading(true))
            const mockNotice = await NoticeService.getNotice()
            mockNotice.data.forEach(notice => dispatch(NoticeActionCreator.setNotice(notice)))
            dispatch(NoticeActionCreator.setIsLoading(false))
        } catch (error) {
            dispatch(NoticeActionCreator.setError(error as string))
        }
    }
}
import { NoticeActionCreator } from './../notice/action-creators'
import { AppDispatch } from "../.."
import { ISetViolationAction, IViolationState, ViolationActionEnum } from "./types"
import ViolationService from '../../../api/ViolationService'
import { message } from 'antd'

export const ViolationActionCreators = {
    setViolation: (violation: IViolationState): ISetViolationAction => ({
        type: ViolationActionEnum.SET_VIOLATION,
        payload: violation
    }),

    getViolation: (carNumber: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(NoticeActionCreator.setIsLoading(true))
            const mockViolation = await (await ViolationService.getViolation()).data

            const violation = mockViolation.find(v => v.car_number === carNumber)
            if (violation) {
                console.log(violation)

                dispatch(ViolationActionCreators.setViolation(violation))
            } else {
                message.error('Not found')
            }

            dispatch(NoticeActionCreator.setIsLoading(false))

        } catch (error) {
            dispatch(NoticeActionCreator.setError(error as string))
        }
    }
}
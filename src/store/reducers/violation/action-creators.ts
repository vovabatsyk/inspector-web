import { AppDispatch } from "../.."
import { SetErrorAction, SetIsLoadingAction, SetViolationAction, Violation, ViolationActionEnum } from "./types"
import ViolationService from '../../../api/ViolationService'
import { message } from 'antd'

export const ViolationActionCreators = {
    setViolation: (violation: Violation): SetViolationAction => ({
        type: ViolationActionEnum.SET_VIOLATION,
        payload: violation
    }),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({ type: ViolationActionEnum.SET_IS_LOADING, payload: isLoading }),
    setError: (error: string): SetErrorAction => ({ type: ViolationActionEnum.SET_ERROR, payload: error }),


    getViolation: (number: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(ViolationActionCreators.setIsLoading(true))
            console.log('true')

            dispatch(ViolationActionCreators.setError(''))
            const mockViolation = await ViolationService.getViolation()

            const violation = mockViolation.data.find(v => v.car_number === number)

            dispatch(ViolationActionCreators.setIsLoading(false))
            console.log('false');


            if (violation) {
                    dispatch(ViolationActionCreators.setViolation(violation))
                } else {
                    dispatch(ViolationActionCreators.setError('Not found'))
                    message.error('Порушення не знайдено!')
                }




        } catch (error) {
            dispatch(ViolationActionCreators.setError(error as string))
        }


    }
}
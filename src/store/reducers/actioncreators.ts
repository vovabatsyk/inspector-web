import { ViolationActionCreators } from './violation/action-creators'
import { NoticeActionCreator } from './notice/action-creators'
export const allActionCreators = {
    ...NoticeActionCreator,
    ...ViolationActionCreators
}
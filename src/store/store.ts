import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { violationApi } from '../services/ViolationService'
import noticeReducer from './reducers/NoticeSlice'

const rootReducer = combineReducers({
    noticeReducer,
    [violationApi.reducerPath]: violationApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(violationApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
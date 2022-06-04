import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { noticesApi } from '../services/NoticeService'
import { paymentApi } from '../services/PaymentService'
import { postsApi } from '../services/PostApi'
import { questionApi } from '../services/QuestionService'
import { violationApi } from '../services/ViolationService'

const rootReducer = combineReducers({
  [violationApi.reducerPath]: violationApi.reducer,
  [noticesApi.reducerPath]: noticesApi.reducer,
  [questionApi.reducerPath]: questionApi.reducer,
  [paymentApi.reducerPath]: paymentApi.reducer,
  [postsApi.reducerPath]: postsApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(violationApi.middleware)
        .concat(noticesApi.middleware)
        .concat(questionApi.middleware)
        .concat(paymentApi.middleware)
        .concat(postsApi.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL } from '../url'
import { IQuestion } from '../models/IQuestion'

export const questionApi = createApi({
  reducerPath: 'questionApi',
  tagTypes: ['Questions', 'Question'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL.DEFAULT}/api/`,
  }),
  endpoints: (build) => ({
    getQuestions: build.query<IQuestion[], number>({
      query: (limit = 5) => ({ url: 'questions' }),
      providesTags: ['Questions', 'Question'],
    }),
  }),
})

export const { useGetQuestionsQuery } = questionApi

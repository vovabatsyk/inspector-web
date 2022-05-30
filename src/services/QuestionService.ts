import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IQuestion } from '../models/IQuestion'

export const questionApi = createApi({
  reducerPath: 'questionApi',
  tagTypes: ['Questions', 'Question'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
    // baseUrl: 'http://localhost:3000/'
  }),
  endpoints: (build) => ({
    getQuestions: build.query<IQuestion[], number>({
      query: (limit = 5) => ({ url: 'questions' }),
      providesTags: ['Questions', 'Question'],
    }),
  }),
})

export const { useGetQuestionsQuery } = questionApi

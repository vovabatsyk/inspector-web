import { INotice } from './../models/INotice'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const noticesApi = createApi({
  reducerPath: 'noticeApi',
  tagTypes: ['Notices', 'Notice'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
  }),
  endpoints: (build) => ({
    getNotices: build.query<INotice[], number>({
      query: (limit = 5) => ({ url: 'notices' }),
      providesTags: ['Notices', 'Notice'],
    }),
  }),
})

export const { useGetNoticesQuery } = noticesApi

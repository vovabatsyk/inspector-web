import { INotice } from './../models/INotice'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL } from '../url'

export const noticesApi = createApi({
  reducerPath: 'noticeApi',
  tagTypes: ['Notices', 'Notice'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL.DEFAULT}/api/`,
  }),
  endpoints: (build) => ({
    getNotices: build.query<INotice[], number>({
      query: (limit = 5) => ({ url: 'notices' }),
      providesTags: ['Notices', 'Notice'],
    }),
  }),
})

export const { useGetNoticesQuery } = noticesApi

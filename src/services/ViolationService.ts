import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IViolation } from '../models/IViolation'
import { IViolationImage } from '../models/IViolationImage'

export const violationApi = createApi({
  reducerPath: 'violationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (build) => ({
    fetchAllViolations: build.query<IViolation[], number>({
      query: (limit: number = 10) => ({
        url: 'violations',
        params: {
          _limit: limit,
        },
      }),
    }),
    getViolation: build.query<IViolation, string>({
      query: (id) => `violations/${id}`,
    }),
    getViolationImages: build.query<IViolationImage[], string>({
      query: (id) => `violation-images/${id}`,
    }),
  }),
})

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IViolation } from '../models/IViolation'

export const violationApi = createApi({
    reducerPath: 'violationApi',
    baseQuery: fetchBaseQuery({ baseUrl: './data' }),
    endpoints: (build) => ({
        fetchAllViolations: build.query<IViolation[], number>({
            query: (limit: number = 10) => ({
                url: '/violation.json',
                params: {
                    _limit: limit
                }
            })
        })
    })
})
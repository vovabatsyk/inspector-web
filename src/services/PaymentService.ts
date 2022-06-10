import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPayment } from '../models/IPayment'
import { URL } from '../url'

export const paymentApi = createApi({
  reducerPath: 'paymentApi',
  tagTypes: ['Payment'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL.DEFAULT}/api/`,
  }),
  endpoints: (build) => ({
    getPayment: build.query<IPayment, number>({
      query: (limit = 1) => ({ url: 'payment/1' }),
      providesTags: ['Payment'],
    }),
  }),
})

export const { useGetPaymentQuery } = paymentApi

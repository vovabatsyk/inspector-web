import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPayment } from '../models/IPayment'

export const paymentApi = createApi({
  reducerPath: 'paymentApi',
  tagTypes: ['Payment'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
    // baseUrl: 'http://localhost:3000/'
  }),
  endpoints: (build) => ({
    getPayment: build.query<IPayment, number>({
      query: (limit = 1) => ({ url: 'payment/1' }),
      providesTags: ['Payment'],
    }),
  }),
})

export const { useGetPaymentQuery } = paymentApi

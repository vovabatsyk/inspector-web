import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL } from '../constants/urls'
import { IPost } from '../models/IPost'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['Posts', 'Post'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL.DEFAULT}/api`,
  }),
  endpoints: (build) => ({
    getPosts: build.query<IPost[], number>({
      query: (limit = 4) => ({ url: '/posts' }),
      providesTags: ['Posts', 'Post'],
    }),
    getPost: build.query<IPost, string>({
      query: (id) => `posts/${id}`,
      providesTags: ['Post'],
    }),
  }),
})

export const { useGetPostsQuery, useGetPostQuery } = postsApi
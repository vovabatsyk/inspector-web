import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL } from '../url'
import { IPost } from '../models/IPost'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['Posts', 'Post'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL.DEFAULT}/api`,
  }),
  endpoints: (build) => ({
    getPosts: build.query<IPost[], number>({
      query: (limit = 4, page = 1) => ({
        url: '/posts',
        params: {
          page: page,
          offset: limit,
        },
      }),
      providesTags: ['Posts', 'Post'],
    }),
    getPost: build.query<IPost, string>({
      query: (id) => `posts/${id}`,

      providesTags: ['Post'],
    }),
  }),
})

export const { useGetPostsQuery, useGetPostQuery } = postsApi

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://identitytoolkit.googleapis.com/v1/',
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (auth) => ({
        url: '/accounts:signUp?key=AIzaSyAwVsSGR2d1nTlD8CJ9QfBux-x5PdtyHrQ', 
        method: 'POST',
        body:  auth,
      }),
    }),
    login: builder.mutation({
      query: (auth) => ({
        url: '/accounts:signInWithPassword?key=AIzaSyAwVsSGR2d1nTlD8CJ9QfBux-x5PdtyHrQ',
        method: 'POST',
        body:  auth ,
      }),
    }),
  }),
});

export const { useLoginMutation,useSignupMutation } = authApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam.p.rapidapi.com/',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key','', 'X-RapidAPI-Host', 'shazam.p.rapidapi.com');

        return headers;
      },
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({ query: () => 'charts/track'}),
    }),
  });

  export const {
    useGetTopChartsQuery
  } = shazamCoreApi;
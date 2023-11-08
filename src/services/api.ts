import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantType } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantType[], void>({
      query: () => ''
    }),

    getSelectedRestaurant: builder.query<RestaurantType, string>({
      query: (id) => `${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetSelectedRestaurantQuery } = api
export default api

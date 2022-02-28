import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ForestApi = createApi({
  reducerPath: "ForestApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://corsanywhere12345.herokuapp.com/https://www.chungbuk.go.kr/",
  }),
  endpoints: (builder) => ({
    getContents: builder.query({
      query: (page = 1) =>
        `/openapi-json/pubdata/pubMapForest.do?pageNo=${page}`,
      transformResponse: (response) => JSON.parse(response),
    }),
  }),
});

export const { useGetContentsQuery } = ForestApi;

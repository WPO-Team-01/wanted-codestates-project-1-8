import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import _ from "underscore";

export const ForestApi = createApi({
  reducerPath: "ForestApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://corsanywhere12345.herokuapp.com/https://www.chungbuk.go.kr/",
  }),
  endpoints: (builder) => ({
    getContents: builder.query({
      query: (page) =>
        `/openapi-json/pubdata/pubMapForest.do?numOfRows=${page}`,
      transformResponse: (response) =>
        _.uniq(JSON.parse(response).response, "fcNo"),
    }),
  }),
});

export const { useGetContentsQuery } = ForestApi;

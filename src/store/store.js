import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ForestApi } from "./query/ForestApi";

export const store = configureStore({
  reducer: {
    [ForestApi.reducerPath]: ForestApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ForestApi.middleware),
});

setupListeners(store.dispatch);

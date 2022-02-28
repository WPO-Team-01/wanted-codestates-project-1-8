import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ForestApi } from "./query/ForestApi";

export const store = configureStore({
  reducer: {},
});

setupListeners(store.dispatch);

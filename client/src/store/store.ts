
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../feature/contact/counterReducer";
import { catalogApi } from "../feature/catalog/catalogApi";

export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    counter: counterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catalogApi.middleware)

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../feature/contact/counterReducer";
import { catalogApi } from "../feature/catalog/catalogApi";
import { uiSlice } from "../layout/uiSlice";
import { errorApi } from '../feature/about/errorApi';

export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    [errorApi.reducerPath]: errorApi.reducer,
    counter: counterSlice.reducer,
    ui: uiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catalogApi.middleware, errorApi.middleware)

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


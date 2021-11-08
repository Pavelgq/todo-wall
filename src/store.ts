import { configureStore } from "@reduxjs/toolkit";

import todoReducer from './components/TodoItem/todoSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
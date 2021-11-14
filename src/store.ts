import { configureStore } from "@reduxjs/toolkit";

import todoReducer from './components/TodoItem/todoSlice'
import listReducer from './components/List/listSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    list: listReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
import { ListProps } from "./List.props";

import { v4 as uuidv4 } from 'uuid';

import { initialState as todos, todoSlice } from "../TodoItem/todoSlice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface ListState {
  lists: ListProps[];
}

const initialState: ListState = {
  lists: [
    {
      title: 'Мои задачи',
      id: '1',
    }
  ]
}

export const listSlice = createSlice({
  name: 'List',
  initialState,
  reducers: {
    addNewList: (state, action: PayloadAction<ListProps>) => {
      state.lists.push(action.payload)
    },
    deleteList: (state, action: PayloadAction<string> ) => {
      state.lists.length && state.lists.splice((state.lists.findIndex(t => t.id === action.payload)), 1);
    },
    changeTitle: (state, action: PayloadAction<ListProps>) => {
      state.lists = state.lists.map(l => {
        if (l.id === action.payload.id) {
          l.title = action.payload.title;
        }
        return l;
      })
    }

  }
})

export const {addNewList, deleteList, changeTitle} = listSlice.actions;
export const selectList = (state: RootState) => state.list.lists; 

export default listSlice.reducer;
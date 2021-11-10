import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TodoItemProps } from "./TodoItem.props";

import { v4 as uuidv4 } from 'uuid';


export interface TodoState {
  tasks: TodoItemProps[];
}

const initialState: TodoState = {
  tasks: [
    {
      description: 'Приготовить ужин',
      check: false,
      tags: ['lol', 'ololo'],
      color: 'orange',
      id: uuidv4(),
    },
    {
      description: 'Съесть ужин',
      check: true,
      tags: ['lol1', 'ololo'],
      color: 'red',
      id: uuidv4(),
    },
  ],
}

export const todoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<TodoItemProps>) => {
      state.tasks.push(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.tasks.length && state.tasks.splice((state.tasks.findIndex(t => t.id === action.payload)), 1);
    },
  }
});
export const { addNewTodo, deleteTodo } = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todo.tasks;


export default todoSlice.reducer;
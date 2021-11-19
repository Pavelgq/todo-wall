import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TodoItemProps } from "./TodoItem.props";

import { v4 as uuidv4 } from 'uuid';
import { SortEnam } from "../Sort/Sort.props";


export interface TodoState {
  tasks: TodoItemProps[];
}

export const initialState: TodoState = {
  tasks: [
    {
      description: 'Приготовить ужин',
      check: false,
      tags: ['lol', 'ololo'],
      color: 'orange',
      id: uuidv4(),
      listId: '1',
    },
    {
      description: 'Съесть ужин',
      check: true,
      tags: ['lol1', 'ololo'],
      color: 'red',
      id: uuidv4(),
      listId: '1',
    },
  ],
}

export const todoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<TodoItemProps>) => {
      state.tasks.unshift(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.tasks.length && state.tasks.splice((state.tasks.findIndex(t => t.id === action.payload)), 1);
    },
    checkTodo: (state, action: PayloadAction<string>) => {
      const taskIndex = state.tasks.findIndex(t => t.id === action.payload)
      state.tasks[taskIndex].check = !state.tasks[taskIndex].check;
    },
    deleteList: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(t => t.listId !== action.payload);
    },
    editTodoDescription: (state, action: PayloadAction<TodoItemProps>) => {
      const taskIndex = state.tasks.findIndex(t => t.id === action.payload.id)
      state.tasks[taskIndex].description = action.payload.description;
    } 
  }
});
export const { addNewTodo, deleteTodo, checkTodo, editTodoDescription } = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todo.tasks;


export default todoSlice.reducer;
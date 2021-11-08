import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";


export interface TodoItemProps {
  description: string;
  check: boolean;
  tags?: string[];
  color?: string;
}

export interface TodoState {
  tasks: TodoItemProps[];
}

const initialState: TodoState = {
  tasks: [
    {
      description: 'New Todo',
      check: false,
      tags: ['lol', 'ololo'],
      color: 'orange'
    },
    {
      description: 'New Todo1',
      check: true,
      tags: ['lol1', 'ololo'],
      color: 'red'
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

  }
});
export const { addNewTodo } = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todo.tasks;


export default todoSlice.reducer;
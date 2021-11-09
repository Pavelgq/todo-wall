import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TodoItemProps } from "./TodoItem.props";




export interface TodoState {
  tasks: TodoItemProps[];
}

const initialState: TodoState = {
  tasks: [
    {
      description: 'Приготовить ужин',
      check: false,
      tags: ['lol', 'ololo'],
      color: 'orange'
    },
    {
      description: 'Съесть ужин',
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
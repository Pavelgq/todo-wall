import { ListProps } from "./List.props";

import { initialState as todos, todoSlice } from "../TodoItem/todoSlice";

export interface ListState {
  lists: ListProps[];
}

// const initialState: ListState = {
//   lists: [
//     {
//       title: 'Мои задачи',
//       state: todoSlice,
//     }
//   ]
// }
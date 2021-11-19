import { IState } from "../interfaces/IState";


export const getLocalStorageState = (): IState => {
  try {
    const state = localStorage.getItem('store');
    console.log(state)
    if (state === null) {
      return {
        todo: {tasks: []},
        list: {lists: []}
      };
    }
    return JSON.parse(state);
  } catch (error) {
    new Error('error')
  }
  
}

import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, selectTodo, checkTodo } from '../TodoItem/todoSlice'
import styles from './TodoItem.module.css'
import { TodoItemProps } from "./TodoItem.props"

export const TodoItem = ({description, tags, color, check, id}: TodoItemProps): JSX.Element => {

  const state = useSelector(selectTodo)
  const dispatch = useDispatch();

  const deleteTodoItem = () => {
    dispatch(deleteTodo(id))
  }
  const checkTodoItem = () => {
    dispatch(checkTodo());
  }
  return (
    <>
      <li className={cn(styles.item, {
        [styles.check]: check,
      })}>
        <div className={styles.wrapper}>
          <input 
            type="checkbox" 
            id="checkTodo" 
            className={styles.checkbox}
            checked={check} 
            onClick={checkTodoItem}
          />
          <label htmlFor="checkTodo" className={styles.checkboxLabel}></label>
          <span>{description}</span>
          <button 
            className={styles.delButton}
            onClick={deleteTodoItem}
            >
            </button>
        </div>
      </li>
    </>
  )
}
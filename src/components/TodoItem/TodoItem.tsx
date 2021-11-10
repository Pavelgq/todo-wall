
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, selectTodo } from '../TodoItem/todoSlice'
import styles from './TodoItem.module.css'
import { TodoItemProps } from "./TodoItem.props"

export const TodoItem = ({description, tags, color, check, id}: TodoItemProps): JSX.Element => {

  const state = useSelector(selectTodo)
  const dispatch = useDispatch();

  const deleteTodoItem = () => {
    dispatch(deleteTodo(id))
  }
  return (
    <>
      <li className={cn(styles.item, {
        [styles.check]: check,
      })}>
        <div className={styles.wrapper}>
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
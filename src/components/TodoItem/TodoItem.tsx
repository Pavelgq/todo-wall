
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from '../Checkbox/Checkbox';
import { deleteTodo, selectTodo, checkTodo } from '../TodoItem/todoSlice'
import {ReactComponent as CheckIcon} from './check.svg'
import styles from './TodoItem.module.css'
import { TodoItemProps } from "./TodoItem.props"

export const TodoItem = ({description, tags, color, check, id}: TodoItemProps): JSX.Element => {

  const state = useSelector(selectTodo)
  const dispatch = useDispatch();

  const deleteTodoItem = () => {
    dispatch(deleteTodo(id))
  }
  const checkTodoItem = () => {
    dispatch(checkTodo(id));
  }
  return (
    <>
      <li className={cn(styles.item, {
        [styles.complite]: check,
      })}>
        <div className={styles.wrapper}>
          {/* <input 
            type="checkbox" 
            id={id} 
            className={styles.checkbox}
            defaultChecked={check} 
            onClick={checkTodoItem}
          />
          <label htmlFor={id} className={styles.checkboxLabel}>
            <CheckIcon className={styles.check} />
          </label> */}

          <Checkbox id={id} check={check} handleClick={checkTodoItem} />
          
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
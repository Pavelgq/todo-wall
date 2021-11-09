
import cn from 'classnames';
import styles from './TodoItem.module.css'
import { TodoItemProps } from "./TodoItem.props"

export const TodoItem = ({description, tags, color, check}: TodoItemProps): JSX.Element => {
  return (
    <>
      <li className={cn(styles.item, {
        [styles.check]: check
      })}>
          <span>{description}</span>
          
      </li>
    </>
  )
}
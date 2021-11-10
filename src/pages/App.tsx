import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Button, Input, TodoItem, Card} from '../components'
import { TodoItemProps } from '../components/TodoItem/TodoItem.props';
import { addNewTodo, selectTodo } from '../components/TodoItem/todoSlice';
import { declinWord } from '../helpers/otherHelpers';

import styles from './App.module.css'

export const App = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');

  const state = useSelector(selectTodo)

  const dispatch = useDispatch()

  const addMyTodo = () => {
    const newTodo: TodoItemProps = {
      description: inputValue,
      check: false,
      color: 'white',
      tags: ['first'],
      id: uuidv4(),
    }
    dispatch(addNewTodo(newTodo));
    setInputValue('');
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue) {
      addMyTodo();
    }
  }

  return (
    <>
      <Card className={styles.card}>
        <h2 className={styles.title}>Мой список</h2>
        <div className={styles.infoPanel}>
            <span>{state.length} {declinWord(state.length, ['задачи', 'задача', 'задач'])}</span>
            <div>Тут фильтры</div>
          </div>
        <Input
          className={styles.addInput}
          placeholder='Введите...'
          value={inputValue}
          onChange={({target}) => setInputValue(target.value)}
          onKeyDown={handleKeyDown}
        />
      <ul className={styles.list}>
        {state.length && state.map(t => (
          <TodoItem {...t}></TodoItem>
        ))}
      </ul>
      
   
      </Card>
     </>  
  )
}
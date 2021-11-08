import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from '../components'
import { addNewTodo, selectTodo, TodoItemProps } from '../components/TodoItem/todoSlice';

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
      tags: ['first']
    }
    dispatch(addNewTodo(newTodo))
  }

  return (
    <>
      <ul>
        
      </ul>
      <Input
        className={styles.addInput}
        value={inputValue}
        onChange={({target}) => setInputValue(target.value)}

      />
      <Button 
        appearence='primary' 
        className={styles.addButton}
        onClick={inputValue && addMyTodo}
      
      >+</Button>
    </>
  )
}
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Input, TodoItem, Card, Sort} from '../'
import { SortEnam } from '../Sort/Sort.props';
import { TodoItemProps } from '../TodoItem/TodoItem.props';
import { addNewTodo, selectTodo } from '../TodoItem/todoSlice';
import { declinWord } from '../../helpers/otherHelpers';

import styles from './List.module.css'
import { ListProps } from './List.props';

export const List = ({title}: ListProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');
  const [sortType, setSortType] = useState<SortEnam>(0);
  const [sortState, setSortState] = useState<TodoItemProps[]>([]);

  const state = useSelector(selectTodo);
  const dispatch = useDispatch();

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
  const changeSort = (s: SortEnam) => {
    setSortType(s);
  }

  

  useEffect(() => {
    switch (sortType) {
      case 0:
          setSortState(state)
        break;
      case 1:
          setSortState(state.filter(t => !t.check))
        break;
       case 2:
          setSortState(state.filter(t => t.check))
        break;
    }
  }, [state, sortType])

  return (
    <>
      <Card className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.infoPanel}>
            <span>{state.length} {declinWord(state.length, ['задачи', 'задача', 'задач'])}</span>
            <Sort sort={sortType} setSort={changeSort} />
          </div>
        <Input
          className={styles.addInput}
          placeholder='Введите...'
          value={inputValue}
          onChange={({target}) => setInputValue(target.value)}
          onKeyDown={handleKeyDown}
        />
      <ul className={styles.list}>
        {sortState.length ? sortState.map(t => (
          <TodoItem key={t.id} {...t}></TodoItem>
        )): 
        <span className={styles.empty}>Тут ничего нет...</span>}
      </ul>
      
   
      </Card>
     </>  
  )
}
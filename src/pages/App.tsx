import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Button, Input, TodoItem, Card, Sort, List} from '../components'
import { SortEnam } from '../components/Sort/Sort.props';
import { TodoItemProps } from '../components/TodoItem/TodoItem.props';
import { addNewTodo, selectTodo } from '../components/TodoItem/todoSlice';
import { declinWord } from '../helpers/otherHelpers';

import styles from './App.module.css'

export const App = (): JSX.Element => {
  return (
    <List title='Мои дела'/>
  )
}
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Button, List} from '../components'
import { addNewList, selectList } from '../components/List/listSlice';


export const App = (): JSX.Element => {
  const state = useSelector(selectList);
  const dispatch = useDispatch();

  const handleClick = () => {
    const newList = {
      title: 'Новый лист',
      id: uuidv4(),
    }
    dispatch(addNewList(newList))
  }

  return (
    <>
      {state && state.map(l => {
          return <List key={l.id} title={l.title} id={l.id}/>
      })}
      <Button appearence={'primary'} onClick={handleClick}>Добавить лист</Button>
    </> 
  )
}
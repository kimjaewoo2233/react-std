import styled from '@emotion/styled';
import { Title } from './components/Title';
import { ToDoList } from './components/ToDoList';
import { useState } from 'react';
import { on } from 'events';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;



function App() {
  const [ toDoList, setToDoList ] = useState(['리액트 공부하기','NestJS공부하기']);

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  }

  return (
    <Container>
      <Title label='할일목록'/>
      <ToDoList toDoList={toDoList} onDelete={onDelete}/>
    </Container>
  );
}

export default App;

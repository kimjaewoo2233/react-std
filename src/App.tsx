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

const InputWithBtn = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;


const Input = styled.input`

`;

const Submit = styled.button`
  width: 9vh;
  height: 4vh;
  background-color: #4CAF50; /* 녹색 배경 */
  color: white; /* 텍스트 색상 */
  border: none; /* 테두리 없음 */
  border-radius: 5px; /* 모서리 둥글게 */
  font-size: 16px; /* 폰트 크기 */
  cursor: pointer; /* 마우스 오버시 커서 변경 */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); /* 그림자 효과 */
  margin-left: 5px;
  font-size: 10px;
  &:hover {
    background-color: #45a049; /* 호버시 색상 변경 */
  }
`

function App() {
  const [ toDoList, setToDoList ] = useState<string[]>([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  const onSearchInputChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  }

  const addAddTodo = () => {
    if(searchTerm.trim() !== ''){
      setToDoList([...toDoList, searchTerm]);
      setSearchTerm('');
    }
  }

  return (
    <Container>
      <Title label='할일목록'/>
      
      <InputWithBtn>
        <Input type='text' value={searchTerm} onChange={onSearchInputChage}/>
        <Submit onClick={addAddTodo}>{'추가'}</Submit>
      </InputWithBtn>
      <ToDoList toDoList={toDoList} onDelete={onDelete}/>
           
    </Container>
  );
}

export default App;

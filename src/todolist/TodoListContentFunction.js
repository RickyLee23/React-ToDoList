import styled from 'styled-components';

const TodoListContentFilter = styled.div`
  text-align:center;
  margin:10px;
`
const ContentFunctions = styled.div`
  display:flex;
  justify-content:space-between;
  padding:5px;
`
const Status = styled.div`
  color:#8C495E;
  border:1px solid;
  font-size:10px;
  border-radius:3px;
  cursor: pointer;
  padding:3px 2px;
`
const Content = styled.div`
  color:#8C495E;
  ${props => props.isDone && `
    text-decoration:line-through;
  `}
`
const Edit = styled.button`
  color:#8C495E;
  background:#D1D1C2;
  margin-left:20px;
  cursor:pointer;
  outline: none;
`
const Delete = styled.button`
  color:#8C495E;
  background:#D1D1C2;
  margin-left:20px;
  cursor:pointer;
  outline: none;
`


function TodoListContentFunction({todo,handleDeleteTodo,handleToggleDone}) {
  return (
    <TodoListContentFilter >
      <ContentFunctions>
        <Status onClick={ () => {handleToggleDone(todo.id) }} >{todo.isDone?'已完成!':'待執行!'}</Status>
        <Content isDone={todo.isDone}>{todo.content}</Content>
        <div>
          <Edit>編輯</Edit>
          <Delete onClick={ () => {handleDeleteTodo(todo.id)} }>刪除</Delete>
        </div>
      </ContentFunctions>
    </TodoListContentFilter>
  );
}

export default TodoListContentFunction;
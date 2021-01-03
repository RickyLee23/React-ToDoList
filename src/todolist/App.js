import styled from 'styled-components';
import React from 'react';
import TodoListInputFunction from './TodoListInputFunction.js'
import TodoListContentFunction from './TodoListContentFunction.js'
import TodoListFilterFunction from './TodoListFilterFunction.js'

const TodoListWrapper = styled.div`
  margin:50px auto;
  background: #D1D1C2;
  width:450px;
  border:6px solid #74A38C;
  text-align:center;
  box-shadow:5px 10px rgba(0, 0, 0, 0.5);
`
const TodoListTitle = styled.div`
  color:#8C495E;
  padding:10px;
  font-size:30px;
  font-family:monospace;
`

let id = 3

function App() {

  const [value,setValue] = React.useState('')
  const [todos, setTodos] = React.useState([
    {id:2, content:'abc', isDone:true},
    {id:1, content:'怎麼辦', isDone:false}
  ])

  const [filter, setFilter] = React.useState('all')
  
  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleButtonClick = () => {
    if(value !== ""){
      setTodos([
        {
          id:id,
          content:value,
          isDone:false
        },
        ...todos])
        id++
      setValue('')
    }
  }
  
  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleToggleDone = id => {
    setTodos(
      todos.map(todo => {
      if(todo.id !== id) return todo
      return {
        ...todo,
        isDone:!todo.isDone
      }
    }))
  }

  const handleFilterAll = () => {
    setFilter('all')
  }

  const handleFilterNotYet = () => {
    setFilter('notYet')
  }

  const handleFilterDone = () => {
    setFilter('completed')
  }

  const handleCleanUp = () => {
    setTodos([])
  }

  return (
    <div className="App">
      <TodoListWrapper>
        <TodoListTitle>I am TodoList</TodoListTitle>
        <TodoListInputFunction handleButtonClick={handleButtonClick} handleInputChange={handleInputChange} />
        {
          todos.filter((todo) => {
            if (filter === 'all') {
              return true
            }
            if (filter === 'completed') {
               return todo.isDone 
            }
            else if (filter === 'notYet') {
               return !todo.isDone 
            }
          })
          .map(todo => <TodoListContentFunction key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleDone={handleToggleDone}/> )
        }
        <TodoListFilterFunction handleFilterAll={handleFilterAll} handleFilterNotYet={handleFilterNotYet} handleFilterDone={handleFilterDone} handleCleanUp={handleCleanUp} />
      </TodoListWrapper>
    </div>
  );
}

export default App;

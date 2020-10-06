import React, { useState } from "react";
import "./App.css";
import ColorBox from "./Components/ColorBox/ColorBox.jsx";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love you' },
    { id: 2, title: 'I love you 1' },
    { id: 3, title: 'I love you 2' }
  ]);

  function handleTodoClick(todo) {
     const index = todoList.findIndex(x => x.id === todo.id);
     if(index<0) return ;
     const newTodoList=[...todoList];
     newTodoList.splice(index,1);
     setTodoList(newTodoList);
  }

   function handleFormSubmit(formValues){
      console.log('Form submit',formValues);
      const newTodo = {
        id :todoList.length + 1, 
        ...formValues,
      };
      const newTodoList = [...todoList];
      newTodoList.push(newTodo);
      setTodoList(newTodoList);
   }

  return (
    <div className="App">
      <h3>Well come to learn React Hooks</h3>

      <ColorBox />
      <h3>Well com todo list</h3>
      <TodoForm onSubmit={handleFormSubmit}/>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />

    </div>
  );
}
export default App;


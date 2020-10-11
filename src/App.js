import React, { useEffect, useState } from "react";
import "./App.css";
import queryString from 'query-string';
import ColorBox from "./Components/ColorBox/ColorBox.jsx";
import Pagination from "./Components/Pagination";
import PostList from "./Components/PostList";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  console.log('-------------------------------------------------------------- ')
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love you' },
    { id: 2, title: 'I love you 1' },
    { id: 3, title: 'I love you 2' }
  ]);
  // PostList lay du lieu tu server bang useEfetch
  const [pagination, setPagination] = useState({
    _page : 1, 
    _limit :10,
    _totalRow :11,
 });
 const [filter, setFilter] = useState({
   _limit : 10,
   _page : 1,
 });
 const [postList, setPostList] = useState([]);

 useEffect(() => {
   console.log('useEffect -- Một lần trước khi render')
 }, []); // Một lần trước khi render;
 useEffect(() => {
  console.log('useEffect -- Lúc nào cũng chạy qua')
 }); // Lúc nào cũng chạy qua
  useEffect(() => {
    async function fetchPostList() {
      try {
        console.log('useEffect ---- fetchPostList ')
        const paramString = queryString.stringify(filter);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`; 
        // const requestUrl = `http://js-post-api.herokuapp.com/api/posts?_limit=${filter}&_page=${paramString}`; 
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        debugger;
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Error !!!!', error.message)
      }
    }
    fetchPostList();
  }, [filter]);

   // xoa 1 item trong list 
  function handleTodoClick(todo) {
    console.log('handleTodoClick ')
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  // them du lieu vao list va update lai list

  function handleFormSubmit(formValues) {
    console.log('handleFormSubmit ')
    const newTodo = {
      id: todoList.length + 1,
      ...formValues, // /lay tat ca key co trong formValue dc truyen len
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  function handlePageChange(newPage){
    console.log('handlePageChange ')
    debugger;
    filter._page = newPage;
    setFilter({...filter});
  }
  return (
    <div className="App">
      <h3>Well come to learn React Hooks</h3>
      {console.log('render')}
      <ColorBox />
      <h3>Well com todo list</h3>
      <TodoForm onSubmit={handleFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <h3>ReactHook - PostList</h3>
      <PostList posts={postList} />
      <h3>Page</h3>
      <Pagination pagination ={pagination} onPageChange ={handlePageChange}/>
    </div>
  );
}
export default App;


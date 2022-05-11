import React from "react";
import  { AppUI } from './AppUI';


// const defaultTodos = [
//   {text: "cortar cebolla", completed: false},
//   {text: "quiero que tache esta", completed: false},
//   {text: "estudiar mas", completed: false}
// ];



function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
let parseTodos;

if (!localStorageTodos) {
  localStorage.getItem('TODOS_V1', JSON.stringify([])); 
  parseTodos = [];

}else {
  parseTodos = JSON.parse(localStorageTodos);
}

  const [todos, setTodos] = React.useState(parseTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];


  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos =todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
    
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );

  
}

export default App;

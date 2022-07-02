import { useState } from "react";
import './App.css';
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import TodoSearch from "./components/TodoSearch/TodoSearch";

function App() {

  const todos = [
    {
      id: 1,
      text: "Learn HTML and CSS",
    },
    {
      id: 2,
      text: "Learn CSS",
    },
    {
      id: 3,
      text: "Learn React",
    }
  ];

  return (
    <div className="App">
      <TodoForm />
      <TodoSearch />
      <TodoList todos={todos} />
    </div>
  );
}
export default App;

import { useReducer, useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Form from "./components/form/Form";
import TodoList from "./components/todoList/TodoList";
import reducer from "./components/reducer";

function App() {
  const [todo, dispatch] = useReducer(
    reducer,
    // [
    //   { title: "Finish the essay collaboration", id: 5423, isCompleted: false },
    //   { title: "Read next chapter of the book", id: 43543, isCompleted: false },
    // ]
    JSON.parse(localStorage.getItem("todo"))
  );
  const [todosValue, setTodosValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <H1>Todo List</H1>
      <Form
        dispatch={dispatch}
        todo={todo}
        todosValue={todosValue}
        setTodosValue={setTodosValue}
      />
      <TodoList dispatch={dispatch} todo={todo} setTodosValue={setTodosValue} />
    </>
  );
}

export default App;

const H1 = styled.h1`
  color: white;
  font-size: 4rem;
`;

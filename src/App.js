import styled from "styled-components";
import Form from "./components/form/Form";
import TodoList from "./components/todoList/TodoList";
import { ContextConteiner } from "./store/TodoContext";

function App() {
  return (
    <ContextConteiner>
      <H1>Todo List</H1>
      <Form />
      <TodoList />
    </ContextConteiner>
  );
}

export default App;

const H1 = styled.h1`
  color: white;
  font-size: 4rem;
`;

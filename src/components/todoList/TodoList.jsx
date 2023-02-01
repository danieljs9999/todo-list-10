import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { GlobalContext } from "../../store/TodoContext";

function TodoList() {
  const { todo } = useContext(GlobalContext);

  return (
    <UlList>
      {todo.map((element) => {
        return <TodoItem element={element} key={element.id} />;
      })}
    </UlList>
  );
}

export default TodoList;

const UlList = styled.ul`
  margin-top: 40px;
  background-color: #151515;
  padding: 20px 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

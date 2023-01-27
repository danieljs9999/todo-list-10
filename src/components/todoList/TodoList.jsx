import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

function TodoList({ todo, dispatch, setTodosValue }) {
  return (
    <UlList>
      {todo.map((element) => {
        return <TodoItem element={element} key={element.id} dispatch={dispatch} setTodosValue={setTodosValue} />;
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

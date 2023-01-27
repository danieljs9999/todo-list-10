import React from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

function Form({ setTodosValue, dispatch, todosValue }) {
  const enebled = todosValue.trim().length > 0;

  const todoHandler = (event) => {
    
    const newTodo = {
      title: todosValue,
      id: Math.random().toString(),
      isCompleted: false,
    };
    dispatch({ type: "add", payload: newTodo });
    setTodosValue("");
    event.preventDefault();
  };

  const addTodoHandler = (event) => {
    setTodosValue(event.target.value);
  };

  return (
    <Forms>
      <Input type="text" value={todosValue} onChange={addTodoHandler} />
      <Button onClick={todoHandler} disabled={!enebled}>
        ADD
      </Button>
    </Forms>
  );
}

export default Form;

const Forms = styled.form`
  margin-top: 60px;
  width: 560px;
  height: 80px;
  background-color: #151515;
  border-radius: 16px;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

import React from "react";
import styled from "styled-components";
import { BsCheck, BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

function TodoItem({ dispatch, element, id, setTodosValue }) {
  const toggleTodo = (id) => {
    dispatch({ type: "toggle", payload: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "remove", payload: id });
  };

  const editTodo = (id, element) => {
    deleteTodo(id);
    setTodosValue(element);
  };

  return (
    <LiList key={id}>
      <Conteiner onClick={() => toggleTodo(element.id)}>
        <InputCheckbox
          className={`${element.isCompleted ? "isCompleted" : " "}`}
        >
          <BsCheck />
        </InputCheckbox>
        <P className={`${element.isCompleted ? "pToggle" : "p"}`}>
          {element.title}
        </P>
      </Conteiner>

      <ButtonConteiner>
        <DeleteButton>
          <BsTrash onClick={() => deleteTodo(element.id)} />
        </DeleteButton>
        <EditButton>
          <BiEditAlt onClick={() => editTodo(element.id, element.title)} />
        </EditButton>
      </ButtonConteiner>
    </LiList>
  );
}

export default TodoItem;

const LiList = styled.li`
  list-style: none;
  padding: 5px 0px 5px 20px;
  border-radius: 10px;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
`;

const P = styled.p`
  width: 400px;
  display: flex;
`;

const InputCheckbox = styled.div`
  margin: 0px 20px 0px 0px;
  width: 25px;
  height: 25px;
  font-size: 4rem;
  border-radius: 8px;
  border: 2px solid #ff284b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonConteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 5px 20px;
`;

const Conteiner = styled.button`
  display: flex;
  align-items: center;
  background-color: #000000;
  font-size: 1.5rem;

  .pToggle {
    color: #9f9f9f;
    font-size: 1.45rem;
    text-decoration: line-through;
  }
  .p {
    color: white;
  }

  .isCompleted {
    background-color: #ff284b;
  }
`;

const DeleteButton = styled.div`
  color: #242424;
  font-size: 26px;

  &:hover {
    color: #7d0000;
  }
  &:active {
    color: red;
  }
`;

const EditButton = styled.div`
  color: #242424;
  font-size: 26px;

  &:hover {
    color: blue;
  }
  &:active {
    color: #242424;
  }
`;

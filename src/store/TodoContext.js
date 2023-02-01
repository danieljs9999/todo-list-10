import { createContext, useReducer, useState, useEffect } from "react";
import reducer from "../components/reducer";

export const GlobalContext = createContext();

export const ContextConteiner = (props) => {
  const [todo, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("key")) || []
  );

  const [todosValue, setTodosValue] = useState("");

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(todo));
  }, [todo]);

  const state = {
    todo,
    dispatch,
    todosValue,
    setTodosValue,
  };

  return (
    <GlobalContext.Provider value={state}>
      {props.children}
    </GlobalContext.Provider>
  );
};

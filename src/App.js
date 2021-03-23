import React, { useState } from "react";

import { Form } from "./component/Form";
import { List } from "./component/List";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todos, { content: todoText, isDone: false }];

    setTodos(newTodos);
    setTodoText("");
  };

  const onChangeText = (event) => setTodoText(event.target.value);

  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const onChangeCheck = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].isDone === false) {
      newTodos[index].isDone = true;
    } else {
      newTodos[index].isDone = false;
    }
    console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <>
      <h1>TODOリスト</h1>
      <Form
        todoText={todoText}
        onClickAdd={onClickAdd}
        onChangeText={onChangeText}
      />
      <List
        onChangeCheck={onChangeCheck}
        todos={todos}
        onClickDelete={onClickDelete}
      />
    </>
  );
};

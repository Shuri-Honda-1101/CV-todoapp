import React from "react";

import { Item } from "./Item";

export const List = (props) => {
  const { todos, onClickDelete, onChangeCheck } = props;
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <Item
            onChangeCheck={() => onChangeCheck(index)}
            content={todo.content}
            isDone={todo.isDone}
            key={index}
            onClickDelete={() => onClickDelete(index)}
          />
        );
      })}
    </ul>
  );
};

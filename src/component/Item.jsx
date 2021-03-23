import React, { useState } from "react";

export const Item = (props) => {
  const { content, onClickDelete, onChangeCheck, isDone } = props;
  console.log(props);
  return (
    <li>
      <input type="checkbox" onChange={onChangeCheck} />
      <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {content}
      </span>
      <button onClick={onClickDelete}>削除</button>
    </li>
  );
};

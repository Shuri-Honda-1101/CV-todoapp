import React from "react";

export const Form = (props) => {
  const { todoText, onClickAdd, onChangeText } = props;
  return (
    <div>
      <input
        placeholder="ここにTODOを入れてね"
        value={todoText}
        onChange={onChangeText}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../actions";
import "./todoToggleInput.scss";

const TodoToggleInput = ({ todoId }) => {
  const dispatch = useDispatch();
  return (
    <input
      type="checkbox"
      className="todo-list__toggle"
      onClick={() => dispatch(toggleTodo(todoId))}
    />
  );
};

export default TodoToggleInput;

import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../actions";
import "./todoDeleteButton.scss";

const TodoDeleteButton = ({ todoId }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="todo-list__delete"
      onClick={() => dispatch(deleteTodo(todoId))}
    ></button>
  );
};

export default TodoDeleteButton;

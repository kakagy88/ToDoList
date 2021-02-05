import React from "react";
import "./todoToggleAllInput.scss";
import { toggleAll } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { getVisibleTodos } from "../organisms/VisibleTodoList";

const TodoToggleAllInput = () => {
  const dispatch = useDispatch();
  const todosSelector = state =>
    getVisibleTodos(state.todos, state.visibilityFilter);
  const todos = useSelector(todosSelector);
  return (
    <input
      id="toggle-all"
      className="visible__toggle-all"
      type="checkbox"
      onClick={() => dispatch(toggleAll(todos))}
    ></input>
  );
};
export default TodoToggleAllInput;

import React from "react";
import { useSelector } from "react-redux";
import { getVisibleTodos } from "../organisms/VisibleTodoList";
import "./todoCount.scss";

const TodoCount = () => {
  const todoCountSelector = state =>
    getVisibleTodos(state.todos, state.visibilityFilter).length;
  const todoCount = useSelector(todoCountSelector);
  return (
    <span className="footer__todo-count">
      <strong>{todoCount}</strong>
      <span> {todoCount > 1 ? "items" : "item"} left</span>
    </span>
  );
};

export default TodoCount;

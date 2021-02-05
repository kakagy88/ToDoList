import React from "react";
import "./todoLabel.scss";

const TodoLabel = ({ text }) => (
  <label className="todo-list__toggle__label">{text}</label>
);

export default TodoLabel;

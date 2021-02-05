import React from "react";
import TodoToggleInput from "../atoms/TodoToggleInput";
import TodoDeleteButton from "../atoms/TodoDeleteButton";
import TodoLabel from "../atoms/TodoLabel";
import "./todo.scss";

const Todo = ({ completed, text, id }) => (
  <li className={completed ? "todo completed" : "todo"}>
    <div className="view">
      <TodoToggleInput todoId={id} />
      <TodoDeleteButton todoId={id} />
      <TodoLabel text={text} />
    </div>
  </li>
);

export default Todo;

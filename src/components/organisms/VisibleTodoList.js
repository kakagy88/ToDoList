import React from "react";
import { useSelector } from "react-redux";
import Todo from "../molecules/Todo";
import TodoToggleAllInput from "../atoms/TodoToggleAllInput";
import TodoToggleAllLabel from "../atoms/TodoToggleAllLabel";
import { VisibilityFilters } from "../../actions";
import "./visibleTodoList.scss";

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(task => task.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(task => !task.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const TodoList = () => {
  const todosSelector = state =>
    getVisibleTodos(state.todos, state.visibilityFilter);
  const todos = useSelector(todosSelector);
  return (
    <div className={todos.length > 0 ? "visible" : "hidden"}>
      <TodoToggleAllInput />
      <TodoToggleAllLabel />
      <ul className="visible__todo-list">
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

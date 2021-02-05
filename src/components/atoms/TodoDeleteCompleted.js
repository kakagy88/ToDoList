import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompleted } from "../../actions";
import "./todoDeleteCompleted.scss";

const TodoDeleteCompleted = () => {
  const numCompletedTodoSelector = state =>
    state.todos.filter(task => task.completed).length;
  const numCompletedTodo = useSelector(numCompletedTodoSelector);

  const dispatch = useDispatch();
  return (
    <button
      className={
        numCompletedTodo > 0 ? "footer__todo-delete-completed" : "hidden"
      }
      onClick={() => dispatch(deleteCompleted())}
    >
      Clear completed
    </button>
  );
};

export default TodoDeleteCompleted;

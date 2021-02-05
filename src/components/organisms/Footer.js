import React from "react";
import { useSelector } from "react-redux";
import FilterLink from "../atoms/FilterLink";
import TodoCount from "../atoms/TodoCount";
import TodoDeleteCompleted from "../atoms/TodoDeleteCompleted";
import { VisibilityFilters } from "../../actions";
import "./footer.scss";

const Footer = () => {
  const todosSelector = state => state.todos;
  const todos = useSelector(todosSelector);
  return (
    <div className={todos.length > 0 ? "footer" : "hidden"}>
      <TodoCount />
      <ul className="footer__filters">
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </ul>
      <TodoDeleteCompleted />
    </div>
  );
};

export default Footer;

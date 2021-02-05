import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVisibilityFilter } from "../../actions";
import "./filterLink.scss";

const Link = ({ children, filter }) => {
  const dispatch = useDispatch();
  const visibilityFilterSelector = state => state.visibilityFilter;
  const visibilityFilter = useSelector(visibilityFilterSelector);
  return (
    <li
      className="filters__list"
      onClick={() => dispatch(setVisibilityFilter(filter))}
    >
      <a className={filter === visibilityFilter ? "selected" : ""}>
        {children}
      </a>
    </li>
  );
};

export default Link;

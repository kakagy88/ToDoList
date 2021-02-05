import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import "./addTodo.scss";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  const handleChange = e => {
    setInput(e.target.value);
  };
  return (
    <div>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="What needs to be done?"
          className="new-todo"
          onChange={handleChange}
          value={input}
        />
      </form>
    </div>
  );
};

export default AddTodo;

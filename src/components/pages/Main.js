import React from "react";
import Header from "../atoms/Header";
import AddTodo from "../organisms/AddTodo";
import VisibleTodoList from "../organisms/VisibleTodoList";
import Footer from "../organisms/Footer";
import "./main.scss";

const Main = () => (
  <div className="main">
    <Header />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default Main;

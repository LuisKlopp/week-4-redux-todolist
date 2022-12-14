/*eslint-disable*/
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import TodoItem from "./TodoItem.jsx";

const StList = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
`;

const StH1 = styled.h1`
  margin-left: 50px;
`;

const TodoList = () => {
  const state = useSelector((state) => state.todo.todo_1);
  console.log(state)

  const working_list = state.filter((todo) => todo.isDone === false).map((todo, i) => <TodoItem todo={todo} key={todo.id}></TodoItem>);
  const done_list = state.filter((todo) => todo.isDone === true).map((todo, i) => <TodoItem todo={todo} key={todo.id}></TodoItem>);
  return (
    <>
      <StH1>Working!!π₯π₯π₯</StH1>
      <StList>{working_list}</StList>
      <StH1>Doneβββ</StH1>
      <StList>{done_list}</StList>
    </>
  );
};

export default TodoList;

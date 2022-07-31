/*eslint-disable*/
import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"; // import 해주세요.
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";


const StWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StItem = styled.div`
  width: 50%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  border: 3px solid black;
`;

const Detail = () => {
  const { id } = useParams();
  const todo_state = useSelector((state) => state.todo.todo_1); // 추가해주세요.
  const navigate = useNavigate();
  let todos = todo_state.find(data => data.id === Number(id));


  return (
    <>
      <StWrapper>
        <StItem>
          <h3 onClick={() => {navigate("/")}} style={{cursor:"pointer"}}>메인으로</h3>
          <h1>{id}</h1>
          <h3>{todos.title}</h3>
          <h3>{todos.content}</h3>
        </StItem>
      </StWrapper>
    </>
  );
};

export default Detail;

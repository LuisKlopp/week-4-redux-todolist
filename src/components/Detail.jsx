/*eslint-disable*/
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"; // import 해주세요.
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
    background-color: ecdede;
    
	}
  `;

const StWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StItem = styled.div`
  width: 30%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  border: 3px solid #ea5718;
  justify-content: center;
  align-items: center;
`;

const Stbutton = styled.div`
  width:30%;
  background-color: antiquewhite;
  padding:20px;
  margin: 0px 0px 50px 0px;
  text-align: center;
  font-weight: 600;
  font-size:20px;
  &:hover{  
    background-color : #f2ae81;
  }
`

const Detail = () => {
  const { id } = useParams();
  const todo_state = useSelector((state) => state.todo.todo_1); // 추가해주세요.
  const navigate = useNavigate();
  let todos = todo_state.find(data => data.id === Number(id));


  return (
    <>
      <GlobalStyle/>
      <StWrapper>
        <StItem>
          <h3>id : {todos.id}</h3>
          <Stbutton onClick={() => {navigate("/")}} style={{cursor:"pointer"}}>메인으로</Stbutton>
          <h1>{todos.title}</h1>
          <h3>{todos.content}</h3>
        </StItem>
      </StWrapper>
    </>
  );
};

export default Detail;

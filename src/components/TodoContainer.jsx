/*eslint-disable*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx"

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
	}
`;

const LayoutDiv = styled.div`
  background-color: #ecdede;
  width:100%;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`



const TodoContainer = styled.div`
  width:100%;
  max-width:1200px;
  min-width:800px;
  height:100vh;
  box-sizing: border-box;
  background-color: #ffffff;
`

const TodosContainer = () => {


  return  (

    <>
    <GlobalStyle/>
    <LayoutDiv>
    <TodoContainer>
      <TodoForm/>
      <TodoList/>
    </TodoContainer>
    </LayoutDiv>
    </>
  )
}

export default TodosContainer;
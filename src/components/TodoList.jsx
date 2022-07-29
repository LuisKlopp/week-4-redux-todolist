/*eslint-disable*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import styled from "styled-components";
import TodoItem from './TodoItem.jsx';


const StList = styled.div`
  width:100%;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
`

const StH1 = styled.h1`
  margin-left:50px;
`

const TodoList = () => {

  const state = useSelector(state => state.todo);
  console.log(state)

  const working_list = state.map((todo) => (<TodoItem todo={todo}></TodoItem>))


  return  (

    <>
    <StH1>Working!!</StH1>
    <StList>
      { working_list }
    </StList>
    <StH1>Done!!</StH1>
    <StList>
      { working_list }
    </StList>
    </>
  )
}

export default TodoList;
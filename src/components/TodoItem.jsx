/*eslint-disable*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import styled from "styled-components";
import { deleteTodo, toggleTodo } from "../redux/modules/todos";


const StItem = styled.div`
  width:20%;
  height:180px;
  border:3px solid #12a670;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:20px; 
`




const TodoItem = ({todo, i}) => {

  const dispatch = useDispatch();
  const state = useSelector(state => state.todo);
  const onDelete = id => dispatch(deleteTodo(id))
  const onToggle = id => dispatch(toggleTodo(id))



  console.log(state)

  return  (

    <>
    <StItem key={i}>
    <span>id : {todo.id} </span>
    <span>{todo.title}</span>
    <span>{todo.content}</span>
    <div>
    <button onClick={() => { onDelete(todo.id) }}>삭제하기</button>
    <button style={{marginLeft:"10px"}} onClick={() => { onToggle(todo.id) }}>완료</button>
    </div>
    </StItem>
    </>
  )
}

export default TodoItem;
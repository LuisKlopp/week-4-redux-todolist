import React, {useReducer} from 'react';
import { useState } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store";

const FormComtainer = styled.div`
  width:100%;
  height:20vh;
  box-sizing: border-box;
  border-bottom:solid 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TodoInput = styled.input`
  width:200px;
  height:40px;
  border:2px solid #de3636;
  border-radius: 20px;

  margin-left:40px;
  margin-right:40px;
  padding-left:20px;
`
const TodoButton = styled.button`
  width:150px;
  height:50px;
  margin:0px 20px 0px 20px;
  font-weight:600;
  background-color: #de3636;
  color:white;
  font-size:20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`
const FormItems = styled.div`
  display: flex;
  align-items: center;
`


const reducer = (state, action) => {
  return{
  ...state,
  [action.name]: action.value
  }
}


const TodoForm = () => {

  const dispatch = useDispatch();
  
  const [state, setState] = useReducer(reducer, {
    title: '',
    content: '',
  })
  
  const { title, content } = state;

  const onCreate = (title, content) => dispatch(addTodo({title, content}));

  const onChange = e => {
    setState(e.target)
  }
  
  const onClick = () => {
    if ( title !== '' && content !== '') {
      // ({type:SUBMIT_FORM, })
      onCreate(title, content);
    }
  }


  return  (
    <>
    <FormComtainer>
      <h1 style={{marginRight:"50px"}}>Todo!</h1>
      <FormItems>
        <h2>제목</h2>
        <TodoInput name="title" onChange={onChange}></TodoInput>
        <h2>내용</h2>
        <TodoInput name="content" onChange={onChange}></TodoInput>
        <TodoButton onClick={onClick} type="button">추가하기</TodoButton>
      </FormItems>
    </FormComtainer>
    </>
  )
}
export default TodoForm;
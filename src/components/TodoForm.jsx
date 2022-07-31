import React from 'react';
import { useState } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";

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
  border:2px solid black;
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
  background-color: #ec8484;
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


const TodoForm = () => {



  const todo_state = useSelector(state => state.todo);
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const dispatch = useDispatch();
  const onCreate = (title, content) => dispatch(addTodo(title, content));


  const onChange = e => {
    e.target.name === 'title' ? setTitle(e.target.value) : setContent(e.target.value)
    
  }

  const onClick = () => {
    if ( title !== '' && content !== '') {
      onCreate(title, content);
      setTitle('');
      setContent('');
    }
  }


  return  (
    <>
    <FormComtainer>
      <h1 style={{marginRight:"50px"}}>Todo!</h1>
      <FormItems>
        <h1>제목</h1>
        <TodoInput name="title" onChange={onChange} value={title}></TodoInput>
        <h1>내용</h1>
        <TodoInput name="content" onChange={onChange} value={content}></TodoInput>
        <TodoButton onClick={onClick} type="button">추가하기</TodoButton>
      </FormItems>
    </FormComtainer>
    </>
  )
}

export default TodoForm;
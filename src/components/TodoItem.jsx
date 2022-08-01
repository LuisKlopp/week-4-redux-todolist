/*eslint-disable*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { deleteTodo, toggleTodo, buttonText} from "../redux/modules/todos";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";


const StItem = styled.div`
  width:25%;
  height:180px;
  border:3px solid ${props => props.isDone ? '#12a670' : '#ea5718'};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:20px; 
`

const StP = styled.div`
  cursor: pointer;
  margin: 0px 0px 20px 0px;
  &:hover{
    color:red;
  }
`

const StDiv = styled.div`
  width:100%;
  display: flex;
  justify-content: center;

`

const StButton = styled.button`
  width:35%;
  margin-left:10px;
  margin-top:20px;
  border:none;
  height:30px;
  cursor: pointer;
  background-color: antiquewhite;
  font-weight:600;
  &:hover{  
    background-color : #f2ae81;
  }
`




const TodoItem = ({todo, i}) => {


  const dispatch = useDispatch();
  const onDelete = (id) => dispatch(deleteTodo(id))
  const onToggle = (id) => dispatch(toggleTodo(id))
  const navigate = useNavigate();
  const isDone = todo.isDone;


  return  (


    <>
    <StItem isDone={isDone} key={i}>
      <StP onClick={() => {navigate("/detail/" + todo.id)}}>
        상세보기
      </StP>
    <span style={{fontWeight:600, fontSize:'20px'}}>{todo.title}</span>
    <span>{todo.content}</span>
    <StDiv>
    <StButton onClick={() => { onDelete(todo.id) }}>삭제하기</StButton>
    <StButton onClick={() => { onToggle(todo.id)}}>
    {isDone ? "취소!" : "완료!"}
    </StButton>
    </StDiv>
    </StItem>
    </>
  )
}

export default TodoItem;
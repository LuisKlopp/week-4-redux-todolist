/*eslint-disable*/
import React, { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
	}
`;

const StWrapper = styled.div`
  width:100%;
  height:100vh;
  background-color: #ecdede;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StBox = styled.div`
  width:40%;
  height:80vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StInput = styled.input`
  width:50%;
  height:50px;
  border-radius: 20px;
  font-size:17px;
  padding-left:20px;
  margin-top:50px;
`


const reducer = (state, action) => {

  return {
    ...state,
    [action.name] : action.value
  }
}



const ReducerTest = () => {

  const [state, dispatch] = useReducer(reducer, {
    first: '',
    second: '',
    third: '',
  });

  const onChange = (e) => {
    dispatch(e.target);
  };

  const { first, second, third } = state;

  console.log(first, second, third)

  return  (

    <>
    <GlobalStyle/>
    <StWrapper>
      <StBox>
        <h2>회원가입</h2>
        <StInput name="first" onChange={onChange}/>
        <StInput name="second" onChange={onChange}/>
        <StInput name="third" onChange={onChange}/>
      </StBox>
    </StWrapper>
    </>
  )
}

export default ReducerTest;
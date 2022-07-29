// src/App.js

import React from "react";
import { useSelector } from "react-redux"; // import 해주세요.
import styled from "styled-components";
import TodosContainer from "./components/TodosContainer";


const App = () => {
  const counterStore = useSelector((state) => state); // 추가해주세요.

  return (
    <TodosContainer></TodosContainer>
  )
}

export default App;
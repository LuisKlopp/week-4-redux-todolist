// src/App.js

import React from "react";
import { useSelector } from "react-redux"; // import 해주세요.
import styled from "styled-components";
import TodoContainer from "./components/TodoContainer";
import { Routes, Route, Link, Redirect } from 'react-router-dom'
import Detail from "./components/Detail.jsx"

const App = () => {
  const counterStore = useSelector((state) => state); // 추가해주세요.

  return (


    <Routes>
      <Route path="/" element={<TodoContainer/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
    </Routes>
  )
}

export default App;
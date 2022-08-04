// src/App.js

import React from "react";
import TodoContainer from "./components/TodoContainer";
import { Routes, Route, Link, Redirect } from 'react-router-dom'
import Detail from "./components/Detail.jsx"
import Reducer from "../src/components/Reducer"

const App = () => {

  return (



    <Routes>
      <Route path="/" element={<TodoContainer/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/test" element={<Reducer></Reducer>}/>
    </Routes>
  )
}

export default App;
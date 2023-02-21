import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import { Login } from "./login/Login";
import { Register } from "./register/Register";
import { Home } from "./Home/Home";

function App() {
  const [currentForm, setcurrentForm] = useState('login');
  const toggleForm = (formName) =>{
    setcurrentForm(formName);
  }
  return (
    // <div className="App">
    // {
    //     currentForm === "login" ?<Login onFormSwith= {toggleForm}/>:<Register onFormSwith= {toggleForm}/>
    // }
      
    // </div>
    <Router classname = "app">
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/> 
        <Route path='/Home' element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;

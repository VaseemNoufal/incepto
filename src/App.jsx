import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Undefined from "./pages/Undefined";
import Founders from "./pages/Founders";

export default function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/founders" element={<Founders />}/> 
        <Route path="*" element={<Undefined />}/>
      </Routes>
    </Router>
    </>
  )
}
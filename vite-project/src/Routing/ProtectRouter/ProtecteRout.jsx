import React from "react";
import HeaderPage from "./HeaderPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";

export default function ProtecteRout() {
  return (
    <div>
      <BrowserRouter>
      <HeaderPage />
      <Routes>
       <Route path="/" Component={Home}/>
       <Route path="/about" Component={About}/>
       <Route path="/service" Component={Service}/>
       <Route path="/contact" Component={Contact}/>





      </Routes>



      </BrowserRouter>
    </div>
  );
}

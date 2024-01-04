import React from "react";
import HeaderPage from "./HeaderPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

import Contact from "./Contact";
import Profile from "./Profile";
import Error404 from "./Error404";
import About from "./About";
import {AdminProtected, Useprotector }from "./Useprotector";
// import  {AdminProtected} from "./AdminProtected";
import Admin from "./Admin";

export default function ProtecteRout() {
  return (
    <div>
      <BrowserRouter>
        <HeaderPage />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/contact" element={<Useprotector Component={<Contact/>}/>} />
          <Route path="/profile" element={<Useprotector Component={<Profile/>}/>}  />
          <Route path="/about" Component={About} />
          {/* <Route path="admin"  element={<
             Component={ <Admin/>} />} /> */}
            <Route path="/admin"  element={<AdminProtected Component={<Admin/>}/>}/>
          <Route path="*" Component={Error404} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

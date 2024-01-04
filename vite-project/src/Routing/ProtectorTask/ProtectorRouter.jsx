import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import Employee from './Employee';
import Profile from './Profile';
import SuperAdmin from './SuperAdmin';
import User from './User';
import Header from './Header';
//import { UseProtector } from './UseProtector';




export default function ProtectorRouter() {
  return (
    <div>
        o

        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/admin" element={Admin}/>
            {/* //<Route path="/admin"  element={<UseProtector component={Admin}/>}/> */}
            <Route path="/employee" Component={Employee}/>
            <Route path="/profile"     Component={Profile}/>
            <Route path="/superAdmin" Component={SuperAdmin}/>
            <Route path="/user" Component={User}/>


        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

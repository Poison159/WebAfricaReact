import React, {useState} from "react";
import Nav from "./components/navbar"
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import {Login} from "./pages/login";
import {Home} from "./pages/home";
import { Navigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";

const Routing = () => {
    return (
        <BrowserRouter>
        <Nav/>
        <Routes> 
            <Route path="/" element={<RequireAuth><Home /></RequireAuth> } />
            <Route path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
    )
}

const RequireAuth = ({ children }) => {
    const val         = useSelector((state)=> state.counter.value);
    var isTrueSet     = (val === 'true');
    if (!isTrueSet) return <Navigate to="/login" replace />
  
    return children;
}

export default Routing;
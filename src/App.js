import './App.css';
import React from "react";
import Routing from "./routing";
import { Provider } from 'react-redux';
import store from './store'
import {Login} from "./pages/login";
import {Home} from "./pages/home";
import { useSelector,useDispatch } from "react-redux";
import {selectUser} from "./features/userSlice"
import Nav from "./components/navbar"

function App() {

  const auth   = useSelector(selectUser).isLoggedIn;


  return (
        <div className="content">
          <Nav/>
          {!auth && <Login/>} 
          {auth && <Home/>}
          {/* <Routing/> */}
        </div>
  );
}

export default App;

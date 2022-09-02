import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {selectUser,toggleLogOut} from "../features/userSlice"
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const user              = useSelector(selectUser);
    const dispatch          = useDispatch();
    return(
        <>
            <div className="row" style={{backgroundColor:"#6AD5F2"}}>
                <div className="col-md-4">
                    <h4>WebAfrica</h4>
                </div>
                <div className="col-md-4 text-center">
                    {
                        !user.email ?
                        <p> Get Fast Fibre | Get Quick ADSL | Get Relaiable ADSL </p>
                        :
                        <p>Logged is as {user.email}</p>
                    }
                </div>
                <div className="col-md-4 right">
                    { 
                        user.email ?
                        <div className="float-right">
                            <button style={{float:"right"}} onClick={() => {dispatch(toggleLogOut());}} className="btn btn-primary">log out</button>
                        </div> 
                        :
                       <></>
                    }
                    
                </div>
            </div>
        </>
        
    );
}

export default Nav;
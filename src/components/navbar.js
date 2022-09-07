import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {selectUser,toggleLogOut} from "../features/userSlice"
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const user              = useSelector(selectUser);
    const dispatch          = useDispatch();
    return(
        <>
            <div className="row" style={{backgroundColor:"#6AD5F2",height:"80px"}}>
                <div className="col-md-4">
                    <img style={{width:"180px",height:"80px"}} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/u9o613qosjxkpf5v9nrv" />
                </div>
                <div className="col-md-4 text-center">
                    {
                        !user.email ?
                        <p> Get Fast Fibre | Get Quick LTE | Get Relaiable ADSL </p>
                        :
                        <p>Logged is as {user.email}</p>
                    }
                </div>
                <div className="col-md-4 right">
                    { 
                        user.email ?
                        <div className="float-right" style={{float:"right",paddingTop:"20px"}}>
                            <button  onClick={() => {
                                dispatch(toggleLogOut());
                                }} className="btn btn-primary">log out</button>
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
import React from "react";


const CardFooter = () => {
    return(
        <div style={{paddingBottom:"10px",paddingBottom:"10px"}}>
            <ul style={{listStyleType:"none",textAlign:"center"}}>
                <li> YOUR SET UP COST: <span style={{fontWeight:"bold"}}>R1974</span></li>
                <li> YOUR PAY PER MONTH: <span style={{fontWeight:"bold"}}>R366</span></li>
                <li> YOUR PAY NOW: <span style={{fontWeight:"bold"}}>R0</span></li>
            </ul>
            <div style={{textAlign:"center",backgroundColor:"#F2F2F2"}}>
                <p>YOU SAVE :<span style={{fontWeight:"bold"}}>R2020</span></p>
            </div>
            <div style={{margin:"auto",textAlign:"center"}}>
                <button style={{borderRadius:"31px",width:"330px",height:"62px"}} className="btn btn-danger">GET STARTED</button>
            </div>
        </div>
    )
}

export default CardFooter;
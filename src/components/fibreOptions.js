import React from "react";
import Card from "./card"


const FibreOptions = () => {
 

        return(   
            <div style={{paddingTop:"80px"}}>
                <h4>What are my fibre options</h4>
                <p>fiber internet is the best and most reliable way toconnect to the internet. if youcan get it then get it</p>
                <p>Currently the following options are available in your area :</p>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <Card src="https://websquad.co.za/wp-content/uploads/2020/11/FNO_Octotel_11000px.png"/>
                    </div>
                    <div className="col-md-6">
                        <Card src="https://www.after12mag.co.za/wp-content/uploads/2020/04/openserve.png"/>
                    </div>
                </div>
            </div> 
        )
    
}

export default FibreOptions;


import React,{useEffect,useState} from "react";
import { useGeolocated } from "react-geolocated";

const SearchBar = () => {
        const [add,setAdd] = useState();
        const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

        useEffect(() => {
            
                const getAddress = async () => {
                    try{
                       if(isGeolocationEnabled){
                        const res       = await fetch('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + coords.latitude + '&lon=' + coords.longitude);
                        const Jsonres   = await  res.json();
                        const address   = Jsonres.display_name;
                        setAdd(address);
                       }
                       
                    }catch(err){
                       console.log(err);
                    }
                }
                getAddress();

        },[add,coords])

    return(
         
        <div className="input-group"style={{paddingTop:"5px",paddingBottom:"100px"}}>
            {isGeolocationAvailable && coords ? 
            <div>
                <div className="input-group">
                    <div className="form-control">
                            <input style={{width:"500px"}} type="search" placeholder={add} id="form1" className="form-control" />
                    </div>
                    <div style={{paddingLeft:"10px"}} className="input-group-addon">
                        <button style={{backgroundColor:"#96AB26"}} type="button" className="btn btn-lg">
                            CHECK AGAIN  <span class="fa fa-trash-o fa-lg" aria-hidden="true"></span>
                        </button>
                    </div>
                </div> 
                <p style={{color: "rgba(0, 0, 0, 0.5)"}}>Wrong place ? <a style={{color: "rgba(0, 0, 0, 0.5)"}} href="#">Change your address</a> or <a style={{color: "rgba(0, 0, 0, 0.5)"}} href="#">Use our interactive map </a></p>
            </div>   
            :
            <div>
                    <p>Checking ...</p>
            </div>   
            }
                        
    </div>
       
           
    
    )
}

export default SearchBar;
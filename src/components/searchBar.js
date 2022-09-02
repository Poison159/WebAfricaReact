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
                {isGeolocationAvailable && coords ? <div>
                    <div className="form-outline">
                            <input style={{width:"500px"}} type="search" placeholder={add} id="form1" className="form-control" />
                        </div>
                        <br/>
                        <button type="button" className="btn btn-small btn-primary">
                            CHECK AGAIN
                        </button>
                    </div> :

                    <></>
                
            }
                
            </div>
    
    )
}

export default SearchBar;
import React,  {useEffect,useState} from "react";
import SearchBar from "./searchBar";


const MainSection = () => {

    const [lat, setLat]                     = useState(0);
    const [lon, setLon]                     = useState(0);

    useEffect(() => {

        async function getGeoLocation(){
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
            alert("could not get location");
              return;
            }
            let { coords } = await Location.getCurrentPositionAsync();
            if (coords) {
                const { latitude, longitude } = coords;
                setLat(latitude); setLon(longitude);
                return coords;
            }
        }

        const getAddress = async () => {
            try{
               
                const res       = await fetch('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + lat + '&lon=' + lon);
                const Jsonres   = await  res.json();
                const city      = Jsonres.address.state;
            }catch(err){
               console.log(err);
            }
        }
        getAddress();

    },[])


    return(
        <div className="mid main">
            <div className="row" >
                <div className="col-md-2"></div>
                <div style={{paddingTop:50}} className="col-md-6">
                    <p className="w_text ">STOP PAYING FOR INTERNET TWICE</p>
                    <h1 className="w_text zoom">HOORAY!</h1>
                    <h1 style={{color: "rgba(0, 0, 0, 0.5)",zoom:1.8}}>FIBER INTERNET</h1>
                    <h1 className="w_text zoom">IS AVAILABLE HERE</h1>
                    <p>You are here</p>
                    <SearchBar/>
                </div>
                <div className="col-md-2"></div>
            </div>
         </div>
    )
}

export default MainSection;
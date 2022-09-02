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
        <div className="mid">
            <div className="row" >
                <div className="col-md-2"></div>
                <div style={{paddingTop:50}} className="col-md-6">
                    <p>stop paying for internet twice</p>
                    <h1>HOORAY</h1>
                    <h1>FIBER INTERNET</h1>
                    <h1>IS AVAILABLE HERE</h1>
                    <p>You are here</p>
                    <SearchBar/>
                </div>
                <div className="col-md-2"></div>
            </div>
         </div>
    )
}

export default MainSection;
import { useEffect, useState } from "react";
import axios from "axios";
import CenterCards from "./CenterCard";

function Centers(props) {

    let [districtId,setDistrictId] = useState("");
    let [centers,setCenters] = useState([]);


    const renderCards = ()=>{
        return centers.map((element)=>{
            return <CenterCards centerInfo={element}/>
        })
    }

    useEffect(()=>{
        // find all the districts based on state_id that you will receive props
        // using axios [via googling it] 
        if(props.currDistrictId != "" && props.currDistrictId != districtId){
            axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${props.currDistrictId}&date=05-02-2022`).then(function (response) {
                console.log(response.data.sessions);
                setCenters(response.data.sessions);
                setDistrictId(props.currDistrictId);
            })
        }
    })

    return ( <div style={{padding:"5px" , overflow: "auto", height:"100vh"}}>
                {renderCards()}
        </div> );
}

export default Centers;
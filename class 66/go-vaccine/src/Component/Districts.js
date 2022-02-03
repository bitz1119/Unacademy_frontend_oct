import { useEffect, useState } from "react";
import axios from 'axios'

function Districts(props) {
    
    let [districts,setDistricts] = useState([]); 
    let [stateId,setStateId] = useState("");
    const renderCards = ()=>{
        return districts.map((element)=>{
            return <h1></h1> 
        })

    }


    useEffect(()=>{
        // find all the districts based on state_id that you will receive props
        // using axios [via googling it] 
        if(props.currStateId != "" && props.currStateId != stateId){
            axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${props.currStateId}`).then(function (response) {
                console.log(response.data.districts);
                setDistricts(response.data.districts);
                setStateId(props.currStateId);
            })
        }

    },[])

    return ( <div style={{padding:"5px"}}>
        {renderCards()}
    </div> );





}

export default Districts;
import { useEffect, useState } from "react";
import axios from 'axios'

function Districts(props) {
    
    let [districts,setDistricts] = useState([]); 
    const renderCards = ()=>{
        return districts.map((element)=>{
            return <h1>{element}</h1> 
        })

    }


    useEffect(()=>{
        // find all the districts based on state_id that you will receive props
        // using axios [via googling it] 
        axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/districts/16').then(function (response) {
          console.log(response);
        })


    },[])

    return ( <div style={{padding:"5px"}}>
        {renderCards()}
    </div> );





}

export default Districts;
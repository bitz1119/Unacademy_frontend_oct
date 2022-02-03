import { useEffect, useState } from "react";

function Districts(props) {
    
    let [districts,setDistricts] = useState([]); 
    const renderCards = ()=>{
        return districts.map((element)=>{
            return <h1>{element}</h1> 
        })

    }


    useEffect(()=>{

    })

    return ( <div style={{padding:"5px"}}>
        {renderCards()}
    </div> );





}

export default Districts;
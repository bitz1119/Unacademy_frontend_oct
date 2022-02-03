import StateCard from "./StateCard";
import states from "../Resources/states";
function States(props) {

    const renderCards = ()=>{
        return states.map((element)=>{
            return <StateCard data={{
                state:element["state_name"],
                stateId:element["state_id"],
                renderDistrict:()=>{props.setCurrStateId(element["state_id"])},
            }}/> 
        })

    }


    return ( <div style={{padding:"5px" , overflow: "auto", height:"100vh"}}>
        {renderCards()}
    </div> );
}

export default States;
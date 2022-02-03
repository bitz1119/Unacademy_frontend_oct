import StateCard from "./StateCard";
import states from "../Resources/states";
function States() {

    const renderCards = (data)=>{
        return <StateCard data={{
            state:"Delhi",
            stateId:30,
            renderDistrict:()=>{console.log("Hello")}
        }}/> 
    }


    return ( <>
        {renderCards()}
    </> );
}

export default States;
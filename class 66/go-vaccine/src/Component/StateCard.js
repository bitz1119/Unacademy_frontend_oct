function StateCard(props) {
    return ( <>
        <div className={`card text-white bg-info mb-3 mx-1`} style={{width: "12rem"}} 
        >
            <div className="card-text" style={{padding:"5px"}} onClick={()=>{props.data.renderDistrict()}}>{props.data.state}</div>
        </div>
    
    </> );
}

export default StateCard;


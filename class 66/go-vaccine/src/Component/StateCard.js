function StateCard(props) {



    return ( <>
        <div className="card text-white bg-info mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header" onClick={()=>{props.data.renderDistrict()}}>{props.data.state}</div>
        </div>
    
    </> );
}

export default StateCard;


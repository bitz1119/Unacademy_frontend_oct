function CenterCards(props) {
    console.log(props)
    return ( <>
        <div className={`card text-white bg-info mb-3 mx-1`} style={{width: "18rem"}} 
        >
             <div class="card-body">
    <p class="card-text" style={{fontSize:"8px"}}>Place : {props.centerInfo.name}
    <br></br>
    Availability : {props.centerInfo.available_capacity}
    </p>
  </div>
        </div>
    
    </> );
}

export default CenterCards;


function TextArea(props) {
    return ( <>
        <textarea onChange={
            (event)=>{
                props.changeData(event.target.value);
                console.log("changed data successfully")
            }
        }></textarea>
    
    </> );
}

export default TextArea;
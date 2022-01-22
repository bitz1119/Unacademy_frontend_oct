function TodoList (props) {

    const renderList = () => {
        console.log(props)
        return props.list.map((element,index)=>{
            return <div key={index+element+Math.random()} className = "my-5">
                <input type="checkbox"></input>
                <div className="mx-2" style={{display:"inline-block"}}>{element}</div>
                <button type="button" class="btn btn-danger" onClick={()=>{
                    props.deleteHandler(index);
                }}>D</button>
                </div>
        })
    }
    
    return ( <>
        <ul>
            {renderList()}
        </ul>
    </> ) ;
}

export default TodoList;
function TodoList (props) {

    const renderList = () => {
        console.log(props)
        return props.list.map((element)=>{
            return <li>{element}</li>
        })
    }
    
    return ( <>
    <ul>
        {renderList()}
    </ul>
    </> ) ;
}

export default TodoList;
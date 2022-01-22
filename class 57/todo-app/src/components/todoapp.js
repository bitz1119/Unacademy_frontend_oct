import { useState } from "react"
import TodoList from "./todolist";

export default function TodoApp() {


    let [inputText,setInputText] = useState("");
    let [todoList,setTodoList] = useState([]);

    const changeHandler = (event)=>{
        console.log(changeHandler,event.target.value )
        console.log(event.target.value)
        setInputText(event.target.value);
    }

    const submitHandler = (event)=>{
        console.log(event)
        let newTodoList = [...todoList, inputText]
        setTodoList(newTodoList);
        event.preventDefault();
        setInputText("");
    }

    const handleDelete = (index) => {
        let newTodoList = [...todoList];
        newTodoList.splice(index,1);
        setTodoList(newTodoList);
    }

    return (
    
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <h1 style={{color:"white"}}>Todo App</h1>
                </div>
            </nav>

            <form onSubmit={submitHandler}>
                <input onChange={changeHandler} value={inputText} />
                <button className="btn btn-primary mx-5 my-5" type="submit">Create Task</button>
                <TodoList list={todoList} deleteHandler={handleDelete}/>
            </form>
        </div>
    )

}
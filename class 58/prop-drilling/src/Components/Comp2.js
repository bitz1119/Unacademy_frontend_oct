function Comp2(props) {

    return ( <div>
        <h2>{props.theme}</h2>
        <button onClick={()=>{
            props.setTheme(
                props.theme === "light" ? "dark" : "light"
                )
        }}>Change Theme</button>
    </div> );

}

export default Comp2;
import Comp2 from "./Comp2";


function Comp1(props) {

    return ( <div>
        <h2>{props.theme}</h2>
        <Comp2 theme = {props.theme} setTheme={props.setTheme}></Comp2>
    </div> );

}

export default Comp1;
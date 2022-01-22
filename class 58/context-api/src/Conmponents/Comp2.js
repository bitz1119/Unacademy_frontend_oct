import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import Comp3 from "./Comp3";

function Comp2() {

    return ( <div>
        <h1>this is Comp2</h1>
        <Comp3 />
    </div> );
}

export default Comp2;
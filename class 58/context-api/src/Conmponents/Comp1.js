import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import Comp2 from "./Comp2";

function Comp1() {

    let theme = useContext(ThemeContext);

    return ( <div>
        <h1>{theme}</h1>
        <Comp2 />
    </div> );
}

export default Comp1;
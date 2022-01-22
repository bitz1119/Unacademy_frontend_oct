import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

function Comp3() {

    let theme = useContext(ThemeContext);


    return ( <div>
        <h1>this is Comp3 {theme}</h1>

    </div> );
}

export default Comp3;
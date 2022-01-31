import { useContext } from "react";
import ThemeContext from "../../Context/Theme";
import Component2 from "./Component2";

function Component1() {

    let theme = useContext(ThemeContext)

    return ( 
        <div>
            {theme.state}
            <Component2 />
        </div>

    );
}

export default Component1;
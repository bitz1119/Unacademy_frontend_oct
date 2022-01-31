import { useContext } from "react";
import ThemeContext from "../../Context/Theme";

function Component2() {

    let theme = useContext(ThemeContext)

    return ( 
        <div>
            {theme.state}
            <button onClick={
                ()=>(
                    theme.setState(theme.state=="Light"?"Dark":"Light")
                    )}>Click Me</button>
        </div>

    );
}

export default Component2;
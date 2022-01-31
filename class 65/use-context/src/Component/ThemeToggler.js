import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import { darkTheme, lightTheme } from "../theme";

function ThemeToggler() {

    let theme = useContext(ThemeContext);

    return ( <button onClick={()=>{theme.setTheme(theme.theme==="light"?"dark":"light")}} style={theme=="light"?lightTheme:darkTheme} >
        Toggle Theme
    </button> );
}

export default ThemeToggler;
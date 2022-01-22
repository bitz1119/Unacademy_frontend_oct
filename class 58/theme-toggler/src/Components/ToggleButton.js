import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";


function ToggleButton() {
    
    const theme = useContext(ThemeContext);
    
    return ( <div>

        <button onClick={()=>{
            theme.setCurrTheme(theme.currTheme === "light" ? "dark" : "light");
        }}>Toggle Theme</button>
        
    </div> );
}

export default ToggleButton;
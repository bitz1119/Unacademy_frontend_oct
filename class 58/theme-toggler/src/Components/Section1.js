import { useContext } from "react";
import Colors from "../Colors";
import ThemeContext from "../Context/ThemeContext";
import ToggleButton from "./ToggleButton";


function Section1() {

    let theme = useContext(ThemeContext);
    console.log(theme);
    // theme => currTheme , setCurrTheme
    return ( <div style={Colors[theme.currTheme]}>
        <h1>This is Section1</h1>
        <h2>Here we are talking about context API</h2>
        <ToggleButton />
    </div> );
}

export default Section1;
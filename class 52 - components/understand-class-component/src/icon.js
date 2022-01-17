import React, { Component } from 'react';


class Icon extends Component {
    constructor(props) {
        super(props);
    }

    render(){

        return (
            <h1>{this.props.isMale=="true"?
            "Male Icon" : "Female Icon"}</h1>
        )

    }


    // case 2
    // render(){
    //     let msg;
    //     if(this.props.isMale =="true"){
    //         msg = "Rendering male icon";
    //     }
    //     else{
    //         msg = "Rendering female icon"
    //     }

    //     return <h1>{msg}</h1>

    // }
    // case 1
    // render() { 
    //     if(this.props.isMale === "true"){
    //         return ( 
    //             <h1>Rendering male icon</h1>
    //         );
    //     }
    //     else{
    //         return ( 
    //             <h1>Rendering female icon</h1>
    //         );
    //     }
    // }
}
 
export default Icon;

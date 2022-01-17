import React, { Component } from 'react';


class Icon extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        let localIsMale = (isMale=="true");
        console.log(localIsMale)
        return localIsMale && (<h1>{ "some mesage"}</h1>)

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

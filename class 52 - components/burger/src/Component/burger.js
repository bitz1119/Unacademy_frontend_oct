import React, { Component } from 'react';
import { UpperBread, LowerBread , Lettuce,Tomatoes, Cheese} from './breadParts';


class Burger extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div>
            <UpperBread/>
            <Lettuce/>
            <Tomatoes/>
            <Cheese/>
            <Lettuce/>
            <Tomatoes/> 
            <LowerBread/> 
        </div> );
    }
}
 
export default Burger;
import React, { Component } from 'react';
import { UpperBread, LowerBread , Lettuce} from './breadParts';


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
            {/* 
            <Tomatoes/>
            <Cheese/>
            <Lettuce/>
            <Tomatoes/> 
            <Tomatoes/> 
            */}
            <LowerBread/> 
        </div> );
    }
}
 
export default Burger;
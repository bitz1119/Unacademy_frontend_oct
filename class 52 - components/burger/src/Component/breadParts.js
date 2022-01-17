import React, { Component } from 'react';
import './style.css'

export class UpperBread extends Component {
    state = {  } 
    render() { 
        return (
            <div className="upper-bread"></div>
        );
    }
}

export class LowerBread extends Component {
    state = {  } 
    render() { 
        return (
            <div className="lower-bread"></div>
        );
    }
}

export class Lettuce extends Component {
    state = {  } 
    render() { 
        return (
            <div className="lettuce"></div>
        );
    }
}


export function Tomatoes(){
    return (<>
            <div className='tomatoes'></div>
            <div className='tomatoes'></div>
            <br></br>
        </>
    )
}

export function Cheese(){
    return (<>
            <div className='cheese'></div>
        </>
    )
}


import React, { Component } from 'react';
import Square from './square';
import './index.css'


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            squares : Array(9).fill(null),
            isXTurn : true,
        }
    }

    isGameAlreadyCompleted(){
        let winningConditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for(let i = 0;i<winningConditions.length;i++){
            let [a,b,c] = winningConditions[i];
            if(this.state.squares[a] !== null && this.state.squares[a] == this.state.squares[b] && this.state.squares[b]==this.state.squares[c]){
                return this.state.squares[a];
            }
        }
        console.log("isGameAlreadyCompleted")
        return null;
    }

    isClickValid(i){
        if(this.isGameAlreadyCompleted() !== null){
            return false;
        }
        else if(this.state.squares[i] !== null){
            return false;
        }
        else return true;
    }

    handleClick(i){

        if(this.isClickValid(i)==false){
            return;
        }

        let tmp = this.state.squares.slice();
        tmp[i] = this.state.isXTurn?"X":"0";
        this.setState({
            squares : tmp,
            isXTurn : !this.state.isXTurn,
        });
    }

    renderSquare(i){
        return <Square value={this.state.squares[i]} whenButtonClicked={()=>{
            this.handleClick(i);
        }} />
    }

    render() { 

        let status = this.isGameAlreadyCompleted();
        return ( 
        <>
            <h1>Winner is {status}</h1>

            <div className="board">
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
            </>

         );
    }
}
 
export default Board;
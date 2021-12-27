let board = new Array(9);
let gameState = ["X Turn","O Turn","Tie","X win","O win"];
let players = ["X","O"]
let currGameState = 0;
let currPlayer = 0;

let tiles = document.getElementsByClassName("tiles");


for(let i = 0;i<tiles.length;i++){
    tiles[i].addEventListener("click",()=>{
        takeInput(i);
    })
}

function validClick(num){
    if(board[num] == undefined){
        return true;
    }
    else return false;
}

function gameIsNotFinished(){
    if(currGameState<2){
        return true;
    }
    else false;
}


function recordResponse(num){
    board[num] = players[currPlayer];
    tiles[num].innerHTML = players[currPlayer];
}

function setStateOfTheGame(){
    // check if currplayer won
    //else check if it is tie
    // else who has the next turn

    //based on above change gameState and header
}

function takeInput(num){
    console.log(num);
    if(validClick(num) && gameIsNotFinished()){
        recordResponse(num);
        setStateOfTheGame();
        currPlayer = (currPlayer+1)%2;
    }
}





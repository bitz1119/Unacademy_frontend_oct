let board = new Array(9);
let gameState = ["X Turn","O Turn","Tie","X win","O win"];
let players = ["X","O"]
let currGameState = 0;
let currPlayer = 0;

let tiles = document.getElementsByClassName("tiles");
let headStatus = document.getElementById("gameStatus");

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

let winningState = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


function setStateOfTheGame(){
    // check if currplayer won
    // check if there any winning state exist or not
    let isWinning = false;
    winningState.forEach((element)=>{
        // console.log(element);
        if(board[element[0]] == players[currPlayer] &&
            board[element[0]] == board[element[1]] &&
            board[element[1]] == board[element[2]]){
                isWinning = true;
        }
    })
    if(isWinning == true){
        if(currPlayer==0){
            currGameState = 3;
        } else{
            currGameState = 4;
        }
        headStatus.innerHTML = gameState[currGameState]; 
        return;
    }

    //else check if it is tie
    let nonUndefined = board.filter((element)=>{
        return (element != undefined);
    })
    if(nonUndefined.length == 9){
        currGameState = 2;
        headStatus.innerHTML = gameState[currGameState]; 
        return;
    }

    // else who has the next turn
    if(currPlayer == 0){
        currGameState = 1;
    }
    else {
        currGameState = 0;
    }

    //based on above change gameState and header
    headStatus.innerHTML = gameState[currGameState]; 

}

function takeInput(num){
    console.log(num);
    if(validClick(num) && gameIsNotFinished()){
        recordResponse(num);
        setStateOfTheGame();
        currPlayer = (currPlayer+1)%2;
    }
}

let resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click",()=>{
    currGameState = 0;
    currPlayer = 0;
    board = new Array(9);

    for(let i = 0;i<tiles.length;i++){
        tiles[i].innerHTML = "";
    }
    headStatus.innerHTML = gameState[currGameState]; 

})




let time = 0;
let timer = document.getElementById("timer");
let id;


function start(){
    id = setInterval(()=>{
        time++;
        timer.innerHTML = time;
    },1000);
}


function stop(){
    console.log("stoped");
    clearInterval(id);
}

function reset(){
    console.log("reset");
    clearInterval(id);
    time = 0;
    timer.innerHTML = time;
}
// how to stop setInterval

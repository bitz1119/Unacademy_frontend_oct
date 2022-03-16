let barns = [1,2,4,8,9]
let cows = 3;


barns.sort((a,b)=>a-b);


function checkAns(index){
    let lastBarnPosition = 0;
    let cowsPlaced = 1;
    for(let i = 1;i<barns.length;i++){
        if(barns[i] - barns[lastBarnPosition] >= index){
            cowsPlaced++;
            lastBarnPosition = i;
            console.log(barns[lastBarnPosition])
        }
    }

    console.log("cowsPlaced " + cowsPlaced)

    if(cowsPlaced >= cows){
        return true;
    }
    else{
        return false;
    }


}

function findAns(){
    let start = 0;
    let end = barns[barns.length-1];
    let ans  = -1;
    while(start <= end){
        let mid= Math.floor((start+end)/2);
        console.log(mid);
        let ifPossible = checkAns(mid);
        if(ifPossible == true){
            ans = mid;
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return ans;
}


console.log(findAns());


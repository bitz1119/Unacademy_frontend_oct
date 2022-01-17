let string1 = "101"  //english
let string2 = "001"  //programming

// length of string

let [knowsBoth,knowsNothing,knowsEnglish,knowsProgramming] = [0,0,0,0];

for(let i=0;i<string1.length;i++){
    if(string1[i] === string2[i]){
        if(string1[i] === "1"){
            knowsBoth++;
        }
        else{
            knowsNothing++;
        }
    }
    else{
        if(string1[i] === "1"){
            knowsEnglish++;
        }
        else{
            knowsProgramming++;
        }
    }
}

let teams = 0;
teams += Math.min(knowsBoth,knowsNothing)
knowsBoth = Math.max(0,knowsBoth-teams);

teams += Math.min(knowsEnglish,knowsProgramming);
let dep = Math.abs(knowsEnglish-knowsProgramming)

teams += Math.min(knowsBoth,dep);
knowsBoth = Math.max(0,knowsBoth-Math.min(knowsBoth,dep));

teams += Math.floor(knowsBoth/2);

console.log(teams);


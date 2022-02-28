const { question } = require("readline-sync");

let arr = [11,110,101,100,1,12,101001010];

function compare(a,b){
    if(a<b){
        return -1;
    }
    if(b<a){
        return 1;
    }
    if(a===b){
        return 0;
    }
}

function compareDescending(a,b){
    if(a>b){
        return -100;
    }
    if (b>a){
        return 100;
    }
    return 0;
}

function compare1(a,b){
    return a-b;
}

// a=5 b=10 compare=-1 compare1=-5
// a=10 b=5 compare=1 compare1=5
// arr.sort(compareDescending)
// console.log(arr);

let employees = [
    {name:"abhishek",YOE:3}, 
    {name:"amith",YOE:0}, 
    {name:"hritik",YOE:1}, 
    {name:"Ayush",YOE:2}, 
]

function compareEmployee(a,b){
    // when we wanted to keep a before b
    // when a.YOE > b.YEO

    // when b before a
    // when b.YOE > a.YOE

    if(a.YOE > b.YOE){
        return -1;
    }
    else if(b.YOE > a.YOE){
        return 1;
    }
    else return 0;
}

function compareEmployee1(a,b){
    return b.YOE - a.YOE;
}

employees.sort(compareEmployee1)

console.log(employees);

// sort based on experience abhishek,ayush,hritik,amith






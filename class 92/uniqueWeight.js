let input = [2,5,7,8,11,3];


function sum(x) {
    let ans = 0;
    for (let index = 0; index < x.length; index++) {
        const element = x[index];
        ans += element;
    }
    return ans;
}

var answer = 1000000000;
var setSol = [];

function sol(arr,index,set1,set2,set3){

    if(index == arr.length){
        if(set1.length == 0 || set2.length==0 || set3.length==0){
            return
        }
        else{
            let ans = Math.abs(sum(set1)-sum(set2))+Math.abs(sum(set2)-sum(set3))
            +Math.abs(sum(set3)-sum(set1));

            if(ans < answer){
                setSol = [[...set1],[...set2],[...set3]];
                answer = ans;
            }
            return;
        }
    }

    set1.push(arr[index]);
    sol(arr,index+1,set1,set2,set3);
    set1.pop();

    set2.push(arr[index]);
    sol(arr,index+1,set1,set2,set3);
    set2.pop();

    set3.push(arr[index]);
    sol(arr,index+1,set1,set2,set3);
    set3.pop();
}

sol(input,0,[],[],[]);
console.log(answer)
console.log(setSol)
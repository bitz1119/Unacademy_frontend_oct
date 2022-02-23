let arr = [3,4,5,6,11,12,14];

// function shouldSwap(a,b){
//     if(a<b){
//         return true;
//     }
//     return false;
// }

function bubbleSort(arr,shouldswap){
    for(let i=0;i<arr.length;i++){
        for (let j = 0; j < arr.length-1; j++)   {
            if(shouldSwap(arr[j],arr[j+1])){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

// console.log(arr)

function compare(a,b){
    return ((a%10)-(b%10));
}

arr  = arr.sort(compare)
console.log(arr);

// 1. by default things are sorted in form of strings

// compare function => a, b 
// if nagetive number is returned it will keep a before b
// if positive number returned it will keep b before a
// if 0 



let students = [
    {marks:1,rollNo:5},
    {marks:2,rollNo:3},
    {marks:1,rollNo:1},
    {marks:4,rollNo:7},
    {marks:3,rollNo:5},
    {marks:4,rollNo:3},
    {marks:5,rollNo:1},
    {marks:5,rollNo:7},
    {marks:7,rollNo:5},
    {marks:2,rollNo:3},
    {marks:1,rollNo:1},
    {marks:5,rollNo:7},
]


// count sort

let max = 0;
for (let index = 0; index < students.length; index++) {
    max = Math.max(students[index].marks,max);
}

let freqArray = new Array(max+1);
freqArray.fill(0);

for (let index = 0; index < students.length; index++) {
    freqArray[students[index].marks]++;    
}

for (let index = 1; index < freqArray.length; index++) {
    freqArray[index] += freqArray[index-1];
}

let sortedArray = new Array(students.length);
for (let index = students.length-1; index >= 0; index--) {

    let sortedIndex = freqArray[students[index].marks] - 1;
    freqArray[students[index].marks]--;
    sortedArray[sortedIndex] = students[index];
}

for (let index = 0; index < sortedArray.length; index++) {
    console.log(sortedArray[index])    
}
console.log(sortedArray);






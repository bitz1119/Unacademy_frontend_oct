// let arr = [1,2,3,"abc",false,"😋"]
// console.log(arr)


// let arr = [['00',01,02],[10,11,12],[20,21,22]];
// console.log(arr);
// console.table(arr);

// console.log(arr[1][1]);
// console.log(arr[2][1]);



// let arr = [
//     [0, 1, 2],
//     [01, 11, 21],
//     [02, 12, 22],
//   ];
//   var str = "";
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//       // console.log(arr[i][j]);
//       str += arr[i][j] + "|";
//     }
//     console.log(str);
//     str= "";
//   }



// let arr = [[1,2,3],[4,5,6],[7,8,9]];


// create an array

let arr = [];
let row = 4;
let col = 3;

for(let i = 0;i<row;i++){
    arr[i] = [];
    for(let j = 0;j<col;j++){
        arr[i][j] = i+"-"+j;
    }
}


console.table(arr);




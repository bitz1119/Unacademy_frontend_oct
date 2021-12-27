// let arr = [1,2,3,4,5,6,7,8,9];

// function double(arr){
//     let doubleArr = [];
//     for(let i = 0;i<arr.length;i++){
//         doubleArr.push(arr[i]*2);
//     }
//     return doubleArr;
// }

// function triple(arr){
//     let doubleArr = [];
//     for(let i = 0;i<arr.length;i++){
//         doubleArr.push(arr[i]*3);
//     }
//     return doubleArr;
// }


// function multiplyArr(arr,multiple){
//     let doubleArr = [];
//     for(let i = 0;i<arr.length;i++){
//         doubleArr.push(arr[i]*multiple);
//     }
//     return doubleArr;
// }

// // I want square of all the numbers

// function square(arr){
//     let doubleArr = [];
//     for(let i = 0;i<arr.length;i++){
//         doubleArr.push(arr[i]*arr[i]);
//     }
//     return doubleArr;
// }



// function returnArr(arr,logic){
//     let doubleArr = [];
//     for(let i = 0;i<arr.length;i++){
//         doubleArr.push(logic(arr[i]));
//     }
//     return doubleArr; 
// }

// function logic1(ele){
//     return ele*ele;
// }

// function logic2(ele){
//     return ele*100;
// }

// // let ans = returnArr(arr,logic2);
// // console.log(ans);

// console.log(arr.map(logic1));

// console.log(arr.map(logic2));

// let input = [["B","A"] , ["H","D"],["K","G"]];
// let fullName = input.map(function abc(ele){
//     return ele[0]+ele[1];
// });

// console.log(fullName)

// // return true if we want to take the element
// function logicForOdd(ele){
//     if(ele%2 != 0){
//         return true;
//     }
//     else return false;
// }

// function logicGreaterThan5(ele){
//     return ele>5;
// }

// let filteredArr = arr.filter(logicGreaterThan5);
// console.log(filteredArr)


// let person = {
//     firstName : "Bittoo",
//     lastName : "Aggarwal",
//     marks : [100,98,99,97],
//     education : [{instituteName : "abcd", marks : "100"},{instituteName :"pqrs",marks:0}],
//     otherDetails : {
//         weight : "65 Kgs",
//         height : "5'5"
//     }
// }
// console.log(person['firstName']);
// console.log(person['lastName']);
// console.log(person['otherDetails']['weight']);

// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.education)


// console.log(person.education[0].instituteName)

// console.log(person.otherDetails.weight)




// let obj = new Object();
// console.log(obj)
// obj.name = "Bittoo";
// console.log(obj)
// obj["lastName"] = "Aggarwal";
// console.log(obj)


// let arr = [1,2,3,4,5,6,7,8,9];

// lets say you want to print index as well

// function print(ele,index,arr){
//     console.log(ele + " " + index + " " + arr);
// }

// arr.forEach(print)


// let arr = ["Bittoo","Aggarwal","65"];

// let [name,lastName,age] = arr;

// console.log(name);
// console.log(lastName);
// console.log(age);


let obj  = {
    firstName : "Bittoo",
    age :24
}

let {lastName} = obj;
// console.log(firstName)
// console.log(age)
console.log(lastName)











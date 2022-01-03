class Person {
    #firstName;
    #lastName;
    constructor(firstName,lastName){
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
    getName(){
        return this.#firstName + "," + this.#lastName;
    }
}

let bittoo = new Person("Bittoo","Aggarwal");
console.log(bittoo.#firstName)

// let student = {
//     rollNo : 101,
//     subjects : ['Hindi', 'English', 'Maths']
// }

// student.prototype = Object.create(bittoo);

// console.log(student.firstName);

// // student.__proto__ = bittoo;
// // console.log(student);

// // console.log(student.getName())

// // var a = 10;

// // function abc(){

// // }
// console.log(student);

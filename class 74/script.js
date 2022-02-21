// // class Person {
// //     constructor(name,lastName,Qualification){
// //         this.name = name;
// //         this.lastName = lastName;
// //         this.currScore = 0;
// //     }
// // }

// // let bittoo = new Person("Bittoo","Aggarwal","Btech")
// // let hritik = new Person("hritik","dangi","Btech")
// // let hritik1 = new Person("hritik","dangi","Btech")
// // let hritik2 = new Person("hritik","dangi","Btech")


// // console.log(bittoo)
// // console.log(hritik)
// // console.log(hritik1)
// // console.log(hritik2)


// // let obj = {};
// // obj.name="bittoo";
// // console.log(obj)




// // class character{
// //     power = 100;
// //     health = 100;
// //     actions = ['punch','kick']
// //     name = ""
// //     constructor(name,otherActions){
// //         this.name = name;
// //         this.actions = [...this.actions,...otherActions]
// //     }
// //     injury(){
// //         this.health -=10;
// //     }
// //     makeAction(){
// //         this.power -= 10;
// //     }
// // }

// // let character1 = new character("bittoo",["fling kick","rock bottom"]);
// // character1.injury()
// // character1.makeAction()
// // console.log(character1)
// // console.dir(character1.injury)
// // console.log(character1.injury)



// // {user} -- {customer , admin}

// class user{
//     constructor(name,address){
//         console.log("contructor is executed")
//         this.name = name;
//         this.address = address;
//     }

//     getPermissions(){
//         return ["read-only"];
//     }
// }

// class customer extends user{

//     constructor(name,address){
//         super(name,address);
//         this.age = 100;
//     }

//     changeName(name){
//         this.name=name;
//     }
// }

// class admin extends user{
//     constructor(name,address){
//         super(name,address);
//     }

//     changeNameOfAnyOthers(name){
//         this.name=name;
//     }

//     getPermissions(){
//         return ["read","write"];
//     }
// }




// let customer1 = new customer("bittoo","Delhi");
// let admin1 = new admin("bittoo","Delhi");

// console.log(customer1)
// customer1.changeName("Ayush")

// console.log(admin1)
// console.log(admin1.getPermissions())


// var person = class{
//     constructor(name){
//         this.name=name;
//     }
// }

// let person1 = new person("name")
// console.log(person1)

// console.log(abc)
// hello()
// foo()

// var foo = ()=>{
//     console.log("hello")
// }

// var abc = 100;
// function hello(){
//     console.log("hello");
// }


var v=1;
var f1 = function(){
    var v = 3;
  console.log(v);
}


var f2 = function(){
  var v=2;
  f1();
}

f2();

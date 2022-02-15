function abc(data){
    return ()=>{
        console.log(data);
    }
}

let abc2 = abc("hello");
abc2();
console.dir(abc2);
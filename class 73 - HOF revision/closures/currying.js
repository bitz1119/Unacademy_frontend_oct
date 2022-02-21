function multiply(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}

function log(time){
    return function(type){
        return function(msg){
            console.log(`${time} : ${type} : ${msg}`)
        }
    }
}

log(new Date())("INFO")("this is info log")
log(new Date())("DEBUG")("this is some level of debugging Log")


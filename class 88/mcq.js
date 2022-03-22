var x=0 

for(x;x<5;x++) 
    console.log(x)


// 0 1 2 3 4
function outer(f=inner())
{
    function inner() { return 'inner' }  
    outer(); 
}




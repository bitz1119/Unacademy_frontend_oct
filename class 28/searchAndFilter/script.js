function filter(){
    let input = document.getElementById("input").value;
    let abc = document.getElementsByClassName("card");
    console.log(abc);
    console.log(input);
    
    for(var i = 0;i<abc.length;i++)
    {
        let element = abc[i];
        let title = element.getElementsByTagName("h5");
        console.log(title[0].innerText);
        console.log(title[0].innerText.indexOf(input));
        console.log(input)
        if(title[0].innerText.indexOf(input) > -1){
            element.style.display = "";
        }
        else{
            element.style.display = "none";
        }
    };


}
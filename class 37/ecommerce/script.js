function filter(){

    let input = document.getElementById("input").value;
    console.log(input)

    let cards = document.getElementsByClassName("card");

    for(let i = 0;i<cards.length;i++){
        let card = cards[i];
        let title = card.getElementsByTagName("h4");
        console.log(title[0].innerText.indexOf(input));
        if(title[0].innerText.indexOf(input) == -1){
            card.style.display = "none";
        }
        else{
            card.style.display = "";
        }


    }


}
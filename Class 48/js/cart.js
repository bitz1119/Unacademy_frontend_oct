async function fetchCartDetails(){
    let requestBody = {
        userId : localStorage.getItem("userid")
    }

    let response = await fetch("http://13.235.87.215:4000/api/v1/order/details/",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(requestBody)
    });

    console.log(response);
    let data = await response.json();
    console.log(data);
    if(data.success){
        renderCart()
    }
    else{
        alert("unable to fetch products");
    }
}

function renderCart(){
    // ?
}


fetchCartDetails()
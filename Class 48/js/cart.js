let cartDiv = document.getElementById("cart");


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
        renderCart(data.orderDetails.products);
    }
    else{
        alert("unable to fetch products");
    }
}

function renderCart(orderDetails){
    for(let i = 0;i<orderDetails.length;i++){
        let card = `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4 my-4">
            <img class="img-fluid" src="./resources/img/imagens-ecommerce.png"" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${orderDetails[i].name}</h5>
              <p class="card-text">${orderDetails[i].price}</p>
              <p class="card-text">QTY : ${orderDetails[i].quantity}</p>
            </div>
          </div>
        </div>
        
        `

        cartDiv.innerHTML += card;


    }
}


fetchCartDetails()

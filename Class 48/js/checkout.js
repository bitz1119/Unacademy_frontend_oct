let cartDiv = document.getElementById("cart");
let billDiv = document.getElementById("bill");


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
        renderCart(data.orderDetails);
    }
    else{
        alert("unable to fetch products");
    }
}

function renderCart(orderDetails){
    for(let i = 0;i<orderDetails.products.length;i++){
        let card = `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4 my-4">
            <img class="img-fluid" src="./resources/img/imagens-ecommerce.png"" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${orderDetails.products[i].name}</h5>
              <p class="card-text">${orderDetails.products[i].price}</p>
              <p class="card-text">QTY : ${orderDetails.products[i].quantity}</p>
            </div>
          </div>
        </div>
        
        `

        let billDetails = `
        <div class="row">
            <div class="col-3">${orderDetails.products[i].name}</div>
            <div class="col-3">${orderDetails.products[i].quantity}</div>
            <div class="col-3">${orderDetails.products[i].price}</div>
            <div class="col-3">${orderDetails.products[i].price* orderDetails.products[i].quantity}</div>
        </div>
        <hr>
        `

        billDiv.innerHTML += billDetails;

        cartDiv.innerHTML += card;
    }

    billDiv.innerHTML += `<h3>Grand Amount : ${orderDetails.total}</h3>
    <button class="btn btn-success" onclick="makePayment(${orderDetails.orderId})">Make Payment</button>

    `

}


fetchCartDetails()


async function makePayment(orderId){
    let requestBody = {
        userId : localStorage.getItem("userid"),
        orderId: orderId,
        payment: true   
    }

    let response = await fetch("http://13.235.87.215:4000/api/v1/order/edit",{
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
        alert(data.msg);
        location.href = "afterOrder.html";
    }

}
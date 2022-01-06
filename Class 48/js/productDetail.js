
let productDetailContainer = document.getElementById("productDetails");
let productId = window.location.search.split("=")[1];
console.log(productId)

fetchProductDetails(productId)


async function fetchProductDetails(productId){

    let requestBody = {
        productId : productId,
        userId : localStorage.getItem("userid")
    }

    let response = await fetch("http://13.235.87.215:4000/api/v1/product/details/",{
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
        renderProduct(data.productDetails)
    }
    else{
        alert("unable to fetch products");
    }
}

async function renderProduct(productDetails){

    let div =`
        <div class="col-5" >
            <img src="./resources/img/imagens-ecommerce.png" class="img-fluid" >
            <button id ="addToCartButton" class="btn btn-primary my-3" onclick="addToCart(${productId})">Add to Cart</button>
            <button id = "redirectToCartButton" class="btn btn-success my-3" onclick="redirectToCart()" style="display:none">Go to Cart</button>
        </div>

        <div class="col-7">
            <h1>${productDetails.name}</h1>
            <h3>₹ ${productDetails.price}</h3>
            <h5>${productDetails.description}</h5>
        </div>
    
    `
    productDetailContainer.innerHTML += div;

    let addToCartButton = document.getElementById("addToCartButton");
    let redirectToCartButton = document.getElementById("redirectToCartButton");
    if(productDetails.addedToCart == 1){
        redirectToCartButton.style.display = "";
        addToCartButton.style.display = "none";
    }


}



async function addToCart(productId){

    let requestBody = {
        productId : productId,
        userId : localStorage.getItem("userid")
    }

    let response = await fetch("http://13.235.87.215:4000/api/v1/order/add",{
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
        location.reload();
    }
    else{
        alert("unable to fetch products");
    }


}


function redirectToCart(){
    window.location.href = "cart.html";
}



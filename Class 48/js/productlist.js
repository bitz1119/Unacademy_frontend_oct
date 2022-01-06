let productListRow = document.getElementById("productListRow");
// fetch categoryId from URL
//location.search.split("=") ===> ["?categoryId","1"]
if(window.location.search != ''){
    let id = location.search.split("=")[1];
    fetchProductList(id)
}
else{
    fetchProductList();
}



async function fetchProductList(categoryId){
    let bodyObj = {};
    if(categoryId != undefined){
        bodyObj.categoryId = categoryId;
    }

    console.log(bodyObj)
    let response = await fetch("http://13.235.87.215:4000/api/v1/product/all",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(bodyObj)
    });

    console.log(response);
    let data = await response.json();
    console.log(data);
    if(data.success){
        renderProductListPage(data.products);
    }
    else{
        alert("unable to fetch products");
    }

}

function renderProductListPage(arr){
    for(let i = 0;i<arr.length ;i++){
        let card = `
        <div class="card mx-3 my-3" style="width: 12rem;">
            <img src="./resources/img/imagens-ecommerce.png" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${arr[i].name}</h5>
            <h5 class="card-title">Price : ${arr[i].price} </h5>
            </div>
        </div>
        `
        productListRow.innerHTML += card;
    }
}





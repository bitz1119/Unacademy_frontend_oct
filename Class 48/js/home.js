let categoryDiv  = document.getElementById("category");

async function fetchCategories(){
    let response = await fetch("http://13.235.87.215:4000/api/v1/category/all",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({})
    });

    console.log(response);
    let data = await response.json();
    console.log(data);
    if(data.success){
        renderCategory(data.categories);
    }


}

function renderCategory(categoryArray){

    let allProductCard =  ` <div class="card-1 mx-5  my-5" onclick="redirectProductList()">
        <div class="card text-white bg-primary mb-3" style="width: 12rem;">
        <div class="card-header"></div>
        <div class="card-body">
          <h5 class="card-title">All products</h5>
        </div>
      </div>
    </div>`
    categoryDiv.innerHTML += allProductCard;

    for(i = 0;i<categoryArray.length;i++){
        let card = `            
    <div class="card-1 mx-5  my-5">
        <div class="card text-white bg-primary mb-3" style="width: 12rem;" onclick="redirectProductList(${categoryArray[i].categoryId})" >
            <div class="card-header"></div>
            <div class="card-body">
              <h5 class="card-title">${categoryArray[i].name}</h5>
            </div>
          </div>
    </div>`
        categoryDiv.innerHTML += card;

    }
}

function redirectProductList(categoryId){
    if(categoryId==undefined){
        window.location.href = "productlist.html";
    }
    else{
        window.location.href = "productlist.html?categoryId=" + categoryId;
    }
}

fetchCategories();
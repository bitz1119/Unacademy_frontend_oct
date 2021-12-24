let todoArr = [];
let lastId = 1;

function addToDo(){
    let todo = document.getElementById("ToDo").value;
    let priority = document.getElementById("priority").value;
    let time = Date();
    let id = lastId++;    

    let todoRow = [todo,priority,time,id];
    todoArr.push(todoRow);
    console.log(todoArr);

    //clear the input
    document.getElementById("ToDo").value = "";
    document.getElementById("priority").value = "";

    constructTable();
}



function constructTable(){
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    for(let i = 0;i<todoArr.length;i++){
        let row = `
        <tr class="table-primary">
        <td scope="row">  <input  type="checkbox" value onclick="toggle(${i})"> </td>
        <td>${todoArr[i][0].strike()}</td>
        <td>${todoArr[i][1]}</td>
        <td>${todoArr[i][2]}</td>
        <td><button onclick="deleteElement(${i+1})" type="button" class="btn btn-danger">Delete</button></td>
        </tr>
        `

        tbody.innerHTML  += row;
    }
}


function deleteElement(id){
    todoArr.splice(id-1,1)
    console.log(todoArr)
    constructTable();
}

function toggle(){

}
let todoArr = [];


function addToDo(){
    let todo = document.getElementById("ToDo").value;
    let priority = document.getElementById("priority").value;
    let time = Date();

    let todoRow = [todo,priority,time];
    todoArr.push(todoRow);
    console.log(todoArr);

    //clear the input
    document.getElementById("ToDo").value = "";
    document.getElementById("priority").value = "";

    constructTable();
}


function constructTable(){
    let tbody = document.querySelector("tbody");
    let innerHTMLTbody = "";
    for(let i = 0;i<todoArr.length;i++){
        let row = `
        <tr class="table-primary">
        <th scope="row">${i+1}</th>
        <td>${todoArr[i][0]}</td>
        <td>${todoArr[i][1]}</td>
        <td>${todoArr[i][2]}</td>
        </tr>
        `

        innerHTMLTbody += row;
    }

    tbody.innerHTML = innerHTMLTbody;

}



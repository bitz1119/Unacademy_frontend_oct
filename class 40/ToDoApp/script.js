let todoArr = [];


function addToDo(){
    let todo = document.getElementById("ToDo").value;
    let priority = document.getElementById("priority").value;
    let time = Date().substr(0,25);

    let todoRow = [todo,priority,time,false];
    todoArr.push(todoRow);
    console.log(todoArr);

    //clear the input
    document.getElementById("ToDo").value = "";
    document.getElementById("priority").value = "";

    constructTable();
}


function deleteRow(rowNo){
    todoArr.splice(rowNo,1);
    // start , Count
    constructTable();
}


function toggleComplete(rowNo){
    todoArr[rowNo][3] = (todoArr[rowNo][3])?false:true;
    constructTable();
}




function getSelectedOption(filterNodes){
    let ans = "";
    for(let i = 0;i<filterNodes.length;i++){

        if(filterNodes[i].checked == true){
            ans = filterNodes[i].value;
        }
    }
    console.log("inside getSelectedOption"  + ans);
    return ans;
}

function shouldDisplay(isCompleted,filter){

    console.log("should Display")
    console.log(isCompleted + " " + filter)
    let ans = "";
    if(filter=="none"){
        ans =  "";
    }
    else if(filter == "completed"){
        if(isCompleted){
            ans =  "";
        }
        else{
            ans = "none";
        }
    }
    else{
        if(isCompleted){
            ans =  "none";
        }
        else{
            ans = "";
        }
    }
    console.log(ans);
    return ans;

}

function constructTable(){
    console.log("constructing Table")
    let filterNodes = document.getElementsByName("filter");
    let selectedFilterOption = getSelectedOption(filterNodes);

    let tbody = document.querySelector("tbody");
    let innerHTMLTbody = "";
    for(let i = 0;i<todoArr.length;i++){
        let row = `
        <tr class="${(todoArr[i][3])?"table-danger":"table-primary"}" style= "display:${shouldDisplay(todoArr[i][3],selectedFilterOption)}">
        <th scope="row">${i+1}</th>
        <td>${todoArr[i][0]}</td>
        <td>${todoArr[i][1]}</td>
        <td>${todoArr[i][2]}</td>
        <td> <input type="checkbox" onclick="toggleComplete(${i})" ${(todoArr[i][3])?"checked":""}  > </td>
        <td> <Button class="btn btn-danger" onclick="deleteRow(${i})"  >Delete</Button> </td>
        </tr>
        `
        //when col-3 is false mark it unchecked and if col-3 is true mark it checked

        innerHTMLTbody += row;
    }

    tbody.innerHTML = innerHTMLTbody;

}



function createCRM(){
    let sheet = [
        ["Ticket","Last Updated","Subject","Priority"]
    ];
    return sheet;
}

function addEntry(sheet,row){
    let ticketNumber = sheet.length;
    let lastUpdatedDate = new Date();
    // splice(start,how many to remove, what to add)
    row.splice(0,0,lastUpdatedDate);
    row.splice(0,0,ticketNumber);
    sheet.push(row);
}

function deleteEntry(sheet,ticketNumber){
    for(let i = 0;i<sheet.length;i++){
        if(sheet[i][0] == ticketNumber){
            sheet.splice(i,1);
            return;
        }
    }
}

function updateEntry(sheet,ticketNumber,columnToUpdate,valueToUpdate){
    // priority -- 3
    let colIndex = sheet[0].indexOf(columnToUpdate);

    for(let i=0;i<sheet.length;i++){
        if(sheet[i][0] == ticketNumber){
            sheet[i][colIndex] = valueToUpdate;
            sheet[i][1] = new Date();
            return;
        }
    }
}


let crm1 = createCRM();
console.log(crm1);

let input1 = ["Marketing","High"];
addEntry(crm1,input1);
let input2 = ["Sales","High"];
addEntry(crm1,input2);
let input3 = ["Operations","High"];
addEntry(crm1,input3);

console.table(crm1);


deleteEntry(crm1,2);

console.table(crm1);

updateEntry(crm1,1,"Priority","Medium");

console.table(crm1);




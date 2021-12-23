// console.dir(document);
// console.log(document.all);
// console.log(document.body)

// let header = document.getElementById("header");
// header.innerText += "World";


// let elements = document.getElementsByTagName("li");

// console.log(elements)
// console.log(typeof(elements))
// console.log(elements[0])
// console.log(elements.item(1))

// let items = document.querySelectorAll(".abc li")
// console.log(items[0].innerText)



let item = document.querySelector(".abc")
console.log(item.parentElement.parentElement.parentElement)


console.log(item.parentNode.parentNode.parentNode)

// what is difference between node and element


console.log(item.childNodes)

console.log(item.childNodes[1].childNodes[0].data)

console.log(item.lastElementChild)



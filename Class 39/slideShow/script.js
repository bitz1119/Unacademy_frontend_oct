let imageArr = ["https://images.unsplash.com/photo-1634283336826-f62fc0edd565?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8aVVJc25WdGpCMFl8fGVufDB8fHx8&w=1000&q=80",
"https://images.unsplash.com/photo-1516429084384-3aa965e20ff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aVVJc25WdGpCMFl8fGVufDB8fHx8&w=1000&q=80",
"https://images.unsplash.com/photo-1640026883305-26fc130d7939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aVVJc25WdGpCMFl8fGVufDB8fHx8&w=1000&q=80",
"https://images.unsplash.com/photo-1640044262720-e198a086ac6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
"https://images.unsplash.com/photo-1639850180078-db1b82f66bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&w=1000&q=80"]


let slideNumber = 0;
function changeSlide(){

    let image= document.getElementById("image");
    image.src = imageArr[slideNumber];
    slideNumber++;

    slideNumber = slideNumber%imageArr.length;

}

setInterval(changeSlide,5000);


function fetchVideo(link,callback){
    setTimeout(()=>{
        let linkArray = link.split("/");
        let videoLink = linkArray.pop();
        console.log("video fetch is done from : " + videoLink);
        let imageLink = linkArray.pop();
        let dataLink = linkArray.pop(); 
        callback(imageLink,dataLink);
    },5000)
}

function fetchImage(imageLink,dataLink,callback){
    setTimeout(()=>{
        console.log("image fetch is done is fetched from : "+imageLink);
        callback(dataLink);
    },2000)
}

function fetchData(metaData,callback){
    setTimeout(()=>{
        console.log("metaData fetch is done is from : "+metaData);
        callback();
    },1000)
}

//all these functions are interrelated
fetchVideo("dataLink/imageLink/videoLink",(il,dl)=>{
    fetchImage(il,dl,(dl1)=>{
        fetchData(dl1,()=>{});
    })
})

// fetchImage("thunbnail",()=>{});
// fetchData("data",()=>{});


console.log("Hello");




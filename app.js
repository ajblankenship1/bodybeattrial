console.log("loaded");

document.querySelector("#symbols").addEventListener("click",(event) => {
    console.log("ive been clicked");
    const element = document.querySelector(".definitions");
    
    console.log(element.style.maxHeight);
    
    if (element.style.maxHeight){
        element.style.maxHeight = "";
    }
    else{
        element.style.maxHeight= "2000px";
    }
})
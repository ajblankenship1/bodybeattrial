console.log("loaded");

document.querySelector("#symbols").addEventListener("click",(event) => {
   
    const element = document.querySelector(".definitions");

    if (element.style.maxHeight){
        element.style.maxHeight = "";
        document.querySelector(".expander").style.transform = "rotate(180deg)";
    }
    else{
        element.style.maxHeight= "2000px";
        document.querySelector(".expander").style.transform = "rotate(0deg)";
    }
})